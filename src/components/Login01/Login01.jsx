import React from 'react'
import style from "./Login01.module.css"
import bgwh from "../../assets/blueWh.jpg"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const Loguin001 = () => {
  return (
    <MDBContainer fluid >
      <MDBRow className={style.centrado}>
        <MDBCol col='12'>
          <MDBCard>
            <MDBCardBody >
              <h2 className={style.l1H2}>Sign in</h2>
              <p >Please enter your login and password!</p>

              <div className={style.BgLogin1}>
                <img src={bgwh} className={style.stretch} alt="warehouse clean and arranged" />
              </div>

              <MDBInput className={style.l1imput} label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput className={style.l1imput} label='Password' id='formControlLg' type='password' size="lg"/>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className={style.l1chkbox} label='Remember me' />
              <MDBBtn className={style.l1btn} size='lg' >
                Login
              </MDBBtn>
              <hr className={style.l1hr}/>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>    
    </MDBContainer>
  )
}

export default Loguin001