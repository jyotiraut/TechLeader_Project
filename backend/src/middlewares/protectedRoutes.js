// protectedRoutes.js (middleware)
import jwt from 'jsonwebtoken';
import User from '../models/userModels.js';

const protectedRoutes = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ message: "Authorization header is missing" });
        }

        const token = authHeader.split(' ')[1]; // Get the token after "Bearer "

        if (!token) {
            return res.status(401).json({ message: "Token is missing" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user; // Attach user to the request object for later use
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Unauthorized: Token has expired" });
        }
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export { protectedRoutes };
