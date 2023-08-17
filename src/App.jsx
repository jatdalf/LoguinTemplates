import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './components/Loguin001/Loguin001';
import Register from './views/Register/Register';
import Header from './components/NavBar/navBar';

function App({routes}) {

  return (
    <>      
      <Header/>     
      <Routes path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

