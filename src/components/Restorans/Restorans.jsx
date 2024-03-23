import React, { useState, useEffect } from 'react'
import styles from "../Header/Header.module.css";
import restoransdata from "../../data";
import { Link } from 'react-router-dom';

function Restorans() {

  const [data, setData] = useState(restoransdata);
  const [inputData, setInputData] = useState('')


  const handleInputChange = (event) => {
    setInputData(event.target.value)
  }

  let filteredData = data.filter((item) => {
      return item.title.toLowerCase().includes(inputData.toLocaleLowerCase());
    })


  return (
    <>
      <section className={styles.restoransection}>
        
        <div className='container'>
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <p style={{fontSize:'25px',color:'#8a2be2'}}>Axtar</p>
            <input
            placeholder='Axtarış...'
              className={styles.input}
              onChange={handleInputChange} />
          </div>

          <div className="row">
            {filteredData.map((item) => (
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div key={item.id} class={`${styles.cardsize} card`}>
                  <div className={styles.imgparent}>
                    <img src={item.imageUrl} class="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}
                    </h5>
                    <p className="card-text">{item.description}</p>
                    <Link to={`order/${item.title}`}>
                    <a href="#" class={`${styles.orderbtn} btn btn-primary`}>Sifariş edin</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </section>



    </>
  )
}

export default Restorans