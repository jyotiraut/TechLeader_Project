import React from 'react'
// import Navbar from './Components/common/Navbar'
import Homepage from './Components/Home/home';
import  Navbar from './Components/navbar/navbar';
import Footer from './Components/common/footer/footer';
import Login from './Components/login/login';
import SignUp from './Components/signup/signUp';
import AddEvent from './Components/event/event';
import About from './Components/about/about';
import History from './Components/history/history';
import Indrayani_History from './Components/history/indrayani_history';
import KanyaMandir_History from './Components/history/kanyamandir_history';
import Thahity_History from './Components/history/thahity_history';
import{Toaster } from 'react-hot-toast';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-event' element={<AddEvent />} />
        <Route path='/about' element={<About />} />
        <Route path='/history' element={<History/>}/>
        <Route path='/history' element={<Indrayani_History/>} />
        <Route path="/indrayani_history" element={<Indrayani_History/>} />
        <Route path="/kanyamandir_history" element={<KanyaMandir_History/>} />
        <Route path="/thahity_history" element={<Thahity_History/>} />


      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
    
  )
}


export default App
