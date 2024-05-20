// SidebarRoute.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Dashboard from "../dashboard/dashboard"
import Eventdetails from '../details/event-details';
import VolunteerDetails from '../details/volunteerdetails'

const SidebarRoute = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event-details" element={<Eventdetails />} />
          <Route path="/volunteer-details" element={<VolunteerDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default SidebarRoute;
