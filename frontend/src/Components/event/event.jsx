import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import toast from "react-hot-toast";
import { AuthContext } from "../context/authContext";
import Sidebar from "../admin/sidebar/sidebar";

const AddEvent = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    date: "",
    location: "",
  });

  // // Assuming you have a function to add events, replace useSignUp with your custom hook
  const { addEvent } = useEvent();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addEvent(formData);
      // Using toast notification for success
      console.log("Event added successfully:", formData);

      navigate("/"); // Navigate to home or any other page after successful submission
    } catch (error) {
      console.error("Error adding event:", error);
      toast.error("Error adding event. Please try again."); // Using toast notification for error
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleImageChange = (e) => {
  //     const file = e.target.files[0]; // Get the first file selected by the user
  //     const reader = new FileReader();

  //     reader.onloadend = () => {
  //         setFormData({ ...formData, image: reader.result });
  //     };

  //     if (file) {
  //         reader.readAsDataURL(file); // Read the file as a data URL
  //     }

  // };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file selected by the user

    setFormData({ ...formData, image: file });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Add Events</h1>

        <form className="add-event-form mt-4" onSubmit={handleSubmit} >
          <div>
            <label htmlFor="title" className="label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="input"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="label">
              Image
            </label>
            <input
              type="file"
              accept="image/*" // Specify accepted file types
              id="image"
              name="image"
              onChange={handleImageChange}
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="label">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="input"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="label">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="input"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-signup mt-4">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
