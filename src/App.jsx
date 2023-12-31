import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Login1 from './components/Login01/Login01';
import Login2 from './components/Login02/Login02';
import Login3 from './components/Login03/Login03';
import Login4 from './components/Login04/Login04';
import Login5 from './components/Login05/Login05';
import Login6 from './components/Login06/Login06';
import Login7 from './components/Login07/Login07';
import Login8 from './components/Login08/Login08';
import Login9 from './components/Login09/Login09';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import Header from './components/NavBar/navBar';
import Landing from './views/Landing/Landing';

function App({routes}) {

  return (
    <>      
      <Header/>     
      <Routes path="/" element={<Header />}>
        <Route index element={<Landing />} />
        <Route path="Home" element={<Home />} />
        <Route path="login01" element={<Login1 />} />
        <Route path="login02" element={<Login2 />} />
        <Route path="login03" element={<Login3 />} />
        <Route path="login04" element={<Login4 />} />
        <Route path="login05" element={<Login5 />} />
        <Route path="login06" element={<Login6 />} />
        <Route path="login07" element={<Login7 />} />
        <Route path="login08" element={<Login8 />} />
        <Route path="login09" element={<Login9 />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

