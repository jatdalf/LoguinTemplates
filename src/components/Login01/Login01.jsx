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
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <div className={style.BgLogin1}>
                <img src={bgwh} className={style.stretch} alt="warehouse clean and arranged" />
              </div>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
              <MDBBtn size='lg'>
                Login
              </MDBBtn>
              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>    
    </MDBContainer>
  )
}

export default Loguin001