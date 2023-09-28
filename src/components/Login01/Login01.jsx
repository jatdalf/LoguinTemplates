import React from 'react'
import style from "./Login01.module.css"
import bgwh from "../../assets/blueWh.jpg"
import { MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';

const Loguin01 = () => {
  return (
    <div className={style.loginForm}>
      <div className={style.centrado}>
        <div col='12'>
          <div>
            <div >
              <h2 className={style.l1H2}>Sign in</h2>
              <p >Please enter your login and password!</p>

              <div className={style.BgLogin1}>
                <img src={bgwh} className={style.stretch} alt="warehouse clean and arranged" />
              </div>

              <MDBInput className={style.l1imput} label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput className={style.l1imput} label='Password' id='formControlLg' type='password' size="lg"/>
              <input type="checkbox" name='flexCheck' id='flexCheckDefault' className={style.l1chkbox} label='Remember me'/>
              Remember me
              <Link to="/">
                <button className={style.l1btn} size='lg' >
                  Login
                </button>
              </Link>
              <hr className={style.l1hr}/>  

            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Loguin01