import React from 'react'
import Footer from '../components/footer/Footer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import About from "../pages/about/About";


const AppRouter = () => {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
     </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter