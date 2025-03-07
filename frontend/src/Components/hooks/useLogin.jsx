import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    const success = validateInput({ email, password });
    if (!success) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      
      if (res.ok) {
        toast.success("Logged in successfully");
        // Store the user in the context and localStorage
        setAuthUser(data);
        localStorage.setItem("chat-user", JSON.stringify(data));
        localStorage.setItem("token", data.token);
        // Navigate to homepage
        navigate("/"); // Adjust the route as necessary
      } else {
        toast.error(data.error || "Invalid email or password");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

function validateInput({ email, password }) {
  if (!email || !password) {
    toast.error("Email and password are required");
    return false;
  }
  return true;
}

export default useLogin;
