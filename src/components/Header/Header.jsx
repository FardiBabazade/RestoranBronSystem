import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";
import enter from "../../assets/images/enter.png"
import logo from "../../assets/icons/logo.png"

export default function Header() {

  const isAdminPage = window.location.pathname === '/admin';

  return (
    <>
      <nav className={`${styles.nav} d-flex justify-content-center align-items-center`}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-3">
              <Link to="/">
                <span className={`${styles.textlogin} text-light`}>
                  <img className={ styles.logoimg }  src={logo} alt="" /> 
                </span>
              </Link>
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <h2 className='text-light text-center'>Restoran Rezervasiya Sistemi</h2>
            </div>
            <div className='col-md-3 col-sm-3 col-3 d-flex justify-content-center align-items-center'>

            {!isAdminPage && (
              <Link to="/login">
                <img className={styles.imgenter} src={enter} alt="" />
                <span className={`${styles.textloginenter} text-light`} >Admin</span>
              </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
