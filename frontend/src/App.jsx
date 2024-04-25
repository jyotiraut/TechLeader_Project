import React from 'react'
// import Navbar from './Components/common/Navbar'
import Homepage from './Components/Home/home';
import  Navbar from './Components/navbar/navbar';
import Footer from './Components/common/footer/footer';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Homepage />
      <Footer />
    </Router>
  )
}


export default App
