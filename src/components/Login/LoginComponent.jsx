import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginComponent.css'


function Login() {

  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  const [lastToastId, setLastToastId] = useState(null);



  const enteradmin = (e) => {

    e.preventDefault();

    const showNotification = (message, type) => {
      if (lastToastId) {
        toast.dismiss(lastToastId);
      }
      const newToast = toast[type](message);
      setLastToastId(newToast);
    };

    if (usernameValue == "admin" && passwordValue == "admin") {
      navigate('/admin');
    }
    else {
      showNotification('Zəhmət olmasa İstifadəçi adi və parolu daxil edin!!!', 'error');
    }

    setUsernameValue('')
    setPasswordValue('')
  };

  return (
    <>
      <section className='backgroundlogin'>
        <div className="container " >
          <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card shadow">
                <div className="card-title text-center border-bottom">
                  <h2 className="p-3" style={{ color: '#8a2be2' }}>Daxil ol</h2>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input type="text" value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} className="form-control" id="username" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} className="form-control" id="password" />
                    </div>

                    <div className="d-grid">
                      <span style={{ fontWeight: 'bold' }}>Qeyd:<br />username :admin,<br />parol:admin.</span>
                      <button type="submit" onClick={enteradmin} className="btn text-light main-bg mt-3">
                        Daxil ol
                      </button>
                    </div>
                  </form>
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
      </section>


    </>
  )
}


export default Login;
