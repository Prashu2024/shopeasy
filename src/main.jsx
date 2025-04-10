import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

// Had to add this wrapper to make router work properly
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Optional: Add StrictMode if not already present */}
    <BrowserRouter>
      <AuthProvider> {/* Wrap App with AuthProvider */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
