import React, { useState, useEffect } from 'react';
import './volunteerdetails.css';
import Sidebar from '../sidebar/sidebar';

function VolunteerDetails() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/volunteers/allvolunteer");

      if (!response.ok) {
        throw new Error("Failed to fetch volunteers");
      }
      const data = await response.json();
      setVolunteers(data);
    } catch (error) {
      console.error("Error fetching volunteers:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="volunteer-details">
          <h1>All Volunteers</h1>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer, index) => (
                <tr key={index}>
                  <td>{volunteer.firstName}</td>
                  <td>{volunteer.lastName}</td>
                  <td>{volunteer.email}</td>
                  <td>{volunteer.phone}</td>
                  <td>{volunteer.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VolunteerDetails;
