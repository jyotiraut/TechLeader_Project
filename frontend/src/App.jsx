import React from 'react';
import Homepage from './Components/Home/home';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/common/footer/footer';
import Login from './Components/login/login';
import SignUp from './Components/signup/signUp';
import AddEvent from './Components/event/event';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Components/context/protectedRoutes.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        {/* Use ProtectedRoute for the add-event route */}
        <Route path='/add-event' element={<AddEvent />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
