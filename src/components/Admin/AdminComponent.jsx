import React, { useState, useEffect } from 'react';
import './AdminComponent.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import deleteIcon from '../../assets/icons/delete.png';
import updateIcon from '../../assets/icons/update.png';

function AdminComponent() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedPhone, setUpdatedPhone] = useState('');
  const [updatedDate, setUpdatedDate] = useState('');
  const [updatedTime, setUpdatedTime] = useState('');
  const [updatedGuests, setUpdatedGuests] = useState('');

  const [selectedBookingIndex, setSelectedBookingIndex] = useState(null);


  const showConfirmation = (message, onConfirm) => {
    if (window.confirm(message)) {
      onConfirm();
    }
  };
  
  
  
  const handleDeleteBooking = (index) => {
    showConfirmation('Bu məlumartları silmək istədiyinizdən əminsiniz?', () => {
      const updatedBookings = [...bookings];
      updatedBookings.splice(index, 1);
      setBookings(updatedBookings);
      localStorage.setItem('orderInformation', JSON.stringify(updatedBookings));
      showNotification('Rezervasiya uğurla silindi', 'success');
    });
  };
  
  


  const handleUpdateBooking = (index) => {
    setSelectedBooking(bookings[index]); 
    setSelectedBookingIndex(index); 
    const selectedBooking = bookings[index];
    setUpdatedTitle(selectedBooking.title);
    setUpdatedPhone(selectedBooking.phone);
    setUpdatedDate(selectedBooking.date);
    setUpdatedTime(selectedBooking.time);
    setUpdatedGuests(selectedBooking.guests);
  };
  const showNotification = (message, type) => {
    toast.success(message);
  };


  const handleUpdateConfirm = () => {
    const updatedBooking = { title: updatedTitle, phone: updatedPhone, date: updatedDate, time: updatedTime, guests: updatedGuests };
    const updatedBookings = [...bookings];
    updatedBookings[selectedBookingIndex] = updatedBooking;
    showNotification('Sizin Güncəlləmə uğurla tamamlandı', 'success');
    setBookings(updatedBookings);
    localStorage.setItem('orderInformation', JSON.stringify(updatedBookings));
    setSelectedBooking(null);
  };

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('orderInformation')) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <div style={{ overflowX: 'auto' }}>
      <h2 className='text-center mt-5'>Rezervasiyalar</h2>
      <div className='parentTable'>
        <table className="booking-table">
          <thead>
            <tr>
              <th>Restoranın adı</th>
              <th>Telefon Nömrəsi</th>
              <th>Tarix</th>
              <th>Saat</th>
              <th style={{ width: '245px' }}>Rezerv olunmuş yerlərin sayı</th>
              <th>Güncəllə</th>
              <th>Sil</th>
            </tr>
          </thead>
          <tbody>{
            bookings?.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.phone}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.guests}</td>
                <td>
                  <img className='updateIcon' src={updateIcon} alt="Update" onClick={() => handleUpdateBooking(index)} />
                </td>
                <td>
                  <img className='deleteIcon' src={deleteIcon} alt="Delete" onClick={() => handleDeleteBooking(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Form */}
      {selectedBooking && (
        <div className='d-flex justify-content-center'>
          <div className="update-form">
            <h2 className='text-center  mb-3'>Rezervasiyanı Güncəllə</h2>
            <input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
            <input type="text" value={updatedPhone} onChange={(e) => setUpdatedPhone(e.target.value)} />
            <input type="text" value={updatedDate} onChange={(e) => setUpdatedDate(e.target.value)} />
            <input type="text" value={updatedTime} onChange={(e) => setUpdatedTime(e.target.value)} />
            <input type="text" value={updatedGuests} onChange={(e) => setUpdatedGuests(e.target.value)} />
            <button className='btn btn-primary' onClick={handleUpdateConfirm}>Güncəllə</button>
          </div>
        </div>
      )}
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
  );
}

export default AdminComponent;
