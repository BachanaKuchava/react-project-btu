import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpperHeader from './Header/UpperHeader';
import LowerHeader from './Header/LowerHeader/LowerHeader';
import Footer from './Footer/Footer';
import Home from './pages/HomePage/Home';
import TestPage from './pages/testPage/TestPage';


import './App.css'

function App() {
 

  return (
    <>
    <BrowserRouter>

    <UpperHeader /> {/* UpperHeader component placed outside Routes to appear on all pages */}
    <LowerHeader /> {/* LowerHeader component placed outside Routes to appear on all pages */}

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<TestPage />} />
    </Routes>

    <Footer />  {/* Footer component placed outside Routes to appear on all pages */}

    </BrowserRouter>



    </>
  )
}

export default App
