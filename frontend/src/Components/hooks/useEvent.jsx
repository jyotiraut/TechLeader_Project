import { useState } from "react";
import toast from "react-hot-toast";

const useEvent = () => {
    const [loading, setLoading] = useState(false);

    const addEvent = async ({ title, description, image, date, location }) => {
        const success = validateEventData({ title, description, image, date, location });
        if (!success) {
            return;
        }

        setLoading(true);
        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("You are not authenticated. Please log in.");
                return;
            }

            // Create FormData for the request body
            const formdata = new FormData();
            formdata.append("title", title);
            formdata.append("description", description);
            formdata.append("image", image);
            formdata.append("date", date);
            formdata.append("location", location);

            // Send the request to the protected route
            const res = await fetch("http://localhost:3000/api/v1/events/create", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the header
                },
                body: formdata,
            });

            const data = await res.json();
            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success("Event created successfully!");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const validateEventData = ({ title, description, image, date, location }) => {
        if (!title || !description || !image || !date || !location) {
            toast.error("All fields are required");
            return false;
        }
        return true;
    };

    return { loading, addEvent };
};

export default useEvent;