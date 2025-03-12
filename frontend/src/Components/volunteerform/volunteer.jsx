import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import './volunteer.css';

const VolunteerForm = () => {
  const { eventId } = useParams();
  console.log("Event ID from URL:", eventId);
  // Get eventId from the URL

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  const navigate = useNavigate(); // Initialize navigate

  // Redirect to homepage if eventId is not present
  useEffect(() => {
    if (!eventId) {
      navigate('/'); // Redirect to homepage or other page if eventId is not available
    }
  }, [eventId, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/v1/volunteers/${eventId}/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, eventId }) // Add eventId to the form data
      });

      if (!response.ok) {
        throw new Error(`Failed to submit: ${response.statusText}`);
      }

      const data = await response.json(); // Try to parse the JSON
      console.log(data); // Optionally handle response

      // Reset form fields after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: ''
      });

      // Redirect to the homepage after successful submission
      navigate('/');
    } catch (error) {
      console.error('Error:', error.message); // Log the error
      // Optionally display an error message to the user
      alert('Failed to submit volunteer form. Please try again.');
    }
  };

  return (
    <div className="volunteer-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="message-container">
        <p>
          Gather with purpose, ignite the fire of culture. 
          Volunteer to craft the story of heritage, safeguarding the essence of our identity. 
          Your dedication fuels the eternal flame of our shared legacy.
        </p>
      </div>
    </div>
  );
};

export default VolunteerForm;
