import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { AuthContextProvider } from './Components/context/authContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
        <App />
      </AuthContextProvider>
   
  </React.StrictMode>
   
);
