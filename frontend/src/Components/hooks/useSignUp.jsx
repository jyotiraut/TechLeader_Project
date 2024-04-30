import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
     const { setAuthUser } = useAuthContext();

    const signup = async ({ firstName, lastName, organizationName, email, password, confirmPassword, accountType }) => {
        const success = handleInputError({ firstName, lastName, organizationName, email, password, confirmPassword, accountType });
        if (!success) {
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("http://localhost:3000/api/v1/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstName, lastName, organizationName, email, password, confirmPassword, accountType }),
            });
            const data = await res.json();
            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success("User registered successfully");
            }

            localStorage.setItem("user", JSON.stringify(data.user));
            setAuthUser(data);
        
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup }; // Uncommented return statement
};

function handleInputError({ firstName, lastName, organizationName, email, password, confirmPassword, accountType }) {
    if (accountType === "individual") {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            toast.error("All fields are required");
            return false;
        }
    } else if (accountType === "organization") {
        if (!organizationName || !email || !password || !confirmPassword) {
            toast.error("All fields are required");
            return false;
        }
    } else {
        toast.error("Invalid account type");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Password do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return false;
    }

    return true;
}

export default useSignUp;



