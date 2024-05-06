import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            {children}
        </div>
    );
}

export default ProtectedRoutes;