// Components/context/protectedRoutes.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Import Redirect from react-router-dom

const ProtectedRoute = ({ element, ...rest }) => {
  const { authUser } = useAuthContext();

  return (
    <Route
      {...rest}
      element={authUser ? element : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
