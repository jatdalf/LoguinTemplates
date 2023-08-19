import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Login1 from './components/Login01/Login01';
import Login2 from './components/Login02/Login02';
import Login3 from './components/Login03/Login03';
import Login4 from './components/Login04/Login04';
import Login5 from './components/Login05/Login05';
import Register from './views/Register/Register';
import Header from './components/NavBar/navBar';

function App({routes}) {

  return (
    <>      
      <Header/>     
      <Routes path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="login01" element={<Login1 />} />
        <Route path="login02" element={<Login2 />} />
        <Route path="login03" element={<Login3 />} />
        <Route path="login04" element={<Login4 />} />
        <Route path="login05" element={<Login5 />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

