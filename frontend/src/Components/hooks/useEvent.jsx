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
            // Your code to add an event goes here
            // // Replace this with your actual API call or database operation
            const formdata = new FormData();
            formdata.append("title", title);
            formdata.append("description", description);
            formdata.append("image", image);
            formdata.append("date", date);
            formdata.append("location", location);

            const res = await fetch("http://localhost:3000/api/v1/events/create", {
                method: "POST",
                // headers: {
                //     "Content-Type": "multipart/form-data"
                // },
                body: formdata
            });
            const data = await res.json();
            if (data.error) {
                toast.error(data.error);
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
        // Additional validation can be added if needed
        return true;
    };

    return { loading, addEvent };
};

export default useEvent;
