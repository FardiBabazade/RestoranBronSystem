import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './OrderForm.css'

function OrderForm() {

  const title = useParams();

  const [lastToastId, setLastToastId] = useState(null);

  const [formData, setFormData] = useState({
    title: title.id,
    phone: '',
    date: '',
    time: '',
    guests: '1'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitData = (e) => {
    e.preventDefault();

    const showNotification = (message, type) => {
      if (lastToastId) {
        toast.dismiss(lastToastId);
      }
      const newToast = toast[type](message);
      setLastToastId(newToast);
    };


    if (formData.phone === '' && formData.time === '' && formData.date === '') {
      showNotification('Zəhmət olmasa məlumatları daxil edin!!!', 'error');
      return;
    } else if (formData.phone === '') {
      showNotification('Zəhmət olmasa Telefon nömrəsini daxil edin!!!', 'error');
      return;
    } else if (formData.date === '') {
      showNotification('Zəhmət olmasa tarixi seçin !!!', 'error');
      return;
    } else if (formData.time === '') {
      showNotification('Zəhmət olmasa vaxtı seçin !!!', 'error');
      return;
    } else {
      showNotification('Sizin Sifarişiniz uğurla tamamlandı', 'success');
    }

    const existingData = JSON.parse(localStorage.getItem("orderInformation")) || [];

    const existingIndex = existingData.findIndex(item => item.phone === formData.phone);

    if (existingIndex !== -1) {
      existingData[existingIndex] = formData;
    } else {
      existingData.push(formData);
    }

    localStorage.setItem("orderInformation", JSON.stringify(existingData));


    setFormData({
      title: title.id,
      phone: '',
      date: '',
      time: '',
      guests: '1'
    });
  };


  return (
    <>
      <div id="booking" className="section">
        <div className="col-md-12 d-flex justify-content-center">
          <h3 className='text-center text-light'>SİFARİŞ EDİN</h3>
        </div>
        <div className="section-center">
          <div className="container">
            <div className="row">

              <div className="booking-form">

                <form onSubmit={submitData}>
                  <div className="row no-margin">

                    <div className="col-md-8">
                      <div className="row no-margin">
                        <div className="col-md-4">
                          <div className="form-group">
                            <span className="form-label">Telefon nömrəsi</span>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="070-777-77-77"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                              value={formData.phone}
                              onChange={handleInputChange}

                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <span className="form-label">Tarix</span>
                            <input
                              className="form-control"
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <span className="form-label">Saat</span>
                            <input
                              className="form-control"
                              type="time"
                              name="time"
                              value={formData.time}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                            <span className="form-label">Qonaqların sayı</span>
                            <select
                              className="form-control"
                              name="guests"
                              value={formData.guests}
                              onChange={handleInputChange}
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </select>
                            <span className="select-arrow" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                      <div className="form-btn">
                        <button type="submit" className="submit-btn">REZERVASİYA ET</button>
                      </div>
                    </div>

                  </div>
                </form>
                <div className="col-md-12">
                  <div>
                    <span className='text-bold'>Qeyd telefon nömrəsini 070-777-77-77 bu formatda etmişəm. "-" yazmasanız form submit olmayacaq.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  )
}


export default OrderForm;