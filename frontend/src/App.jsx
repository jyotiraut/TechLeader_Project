import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Home/home";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/common/footer/footer";
import Login from "./Components/login/login";
import SignUp from "./Components/signup/signUp";
import AddEvent from "./Components/event/event";
import About from "./Components/about/about";
import History from "./Components/history/history";
import Indrayani_History from "./Components/history/indrayani_history";
import KanyaMandir_History from "./Components/history/kanyamandir_history";
import Thahity_History from "./Components/history/thahity_history";
import VolunteerForm from "./Components/volunteerform/volunteer";
import Dashboard from "./Components/admin/dashboard/dashboard";
import Eventdetails from "./Components/admin/details/event-details";
import VolunteerDetails from "./Components/admin/details/volunteerdetails";
import Sidebar from "./Components/admin/sidebar/sidebar";

import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./Components/context/authContext";

const App = () => {


  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
       
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<useLogout />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/indrayani_history" element={<Indrayani_History />} />
          <Route path="/kanyamandir_history" element={<KanyaMandir_History />} />
          <Route path="/thahity_history" element={<Thahity_History />} />
          <Route path="/volunteer/:eventId" element={<VolunteerForm />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event-details" element={<Eventdetails />} />
          <Route path="/volunteer-details" element={<VolunteerDetails />} />

         <Route path="/sidebar" element={<Sidebar/>} />
          
        </Routes>
         
        <Footer />
        <Toaster />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
