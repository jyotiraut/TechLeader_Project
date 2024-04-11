import React from 'react'
import Navbar from './Components/common/Navbar'
import Home from './Components/homeComponents/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  )
}


export default App
