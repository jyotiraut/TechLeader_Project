import React, { useState, useEffect } from "react";
import "./volunteerdetails.css";
import Sidebar from "../sidebar/sidebar";

function VolunteerDetails() {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await fetch("http://localhost:3000/api/v1/volunteers/myevents", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch volunteers");
      }

      const data = await response.json();
      console.log("Full API Response:", data);

      setEvents(data);
    } catch (error) {
      console.error("Error fetching volunteers:", error);
    }
  };

  const handleVolunteerAction = async (volunteerId, eventId, action) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const status = action === "accept" ? "accepted" : "declined";

      const response = await fetch(`http://localhost:3000/api/v1/volunteers/${volunteerId}/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update status to ${status}`);
      }

      // Update UI after status change
      const updatedEvents = events.map((event) => {
        if (event.eventId === eventId) {
          return {
            ...event,
            volunteers: event.volunteers.map((vol) =>
              vol._id === volunteerId ? { ...vol, status } : vol
            ),
          };
        }
        return event;
      });

      setEvents(updatedEvents);
      alert(`Volunteer ${status} successfully!`);

    } catch (error) {
      console.error(`Error updating volunteer status:`, error);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Events & Volunteers</h1>
        <div className="event-list">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.eventId} className="event-card">
                <div className="event-header" onClick={() => setSelectedEventId(selectedEventId === event.eventId ? null : event.eventId)}>
                  <div className="event-info">
                    <h2>{event.eventName}</h2>
                    <p>{event.description}</p>
                  </div>
                </div>

                {/* Show volunteers only if this event is selected */}
                {selectedEventId === event.eventId && (
                  <div className="volunteer-table">
                    <h3>Volunteers for {event.eventName}</h3>
                    {event.volunteers.length > 0 ? (
                      <table>
                        <thead>
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {event.volunteers.map((volunteer, index) => (
                            <tr key={volunteer._id || index}>
                              <td>{volunteer.firstName || "N/A"}</td>
                              <td>{volunteer.lastName || "N/A"}</td>
                              <td>{volunteer.email || "N/A"}</td>
                              <td>{volunteer.phone || "N/A"}</td>
                              <td>{volunteer.address || "N/A"}</td>
                              <td className={`status-${volunteer.status}`}>{volunteer.status || "Pending"}</td>
                              <td>
                                {volunteer.status !== "accepted" && (
                                  <button className="accept-btn" onClick={() => handleVolunteerAction(volunteer._id, event.eventId, "accept")}>
                                    Accept
                                  </button>
                                )}
                                {volunteer.status !== "declined" && (
                                  <button className="decline-btn" onClick={() => handleVolunteerAction(volunteer._id, event.eventId, "decline")}>
                                    Decline
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>No volunteers registered for this event.</p>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VolunteerDetails;
