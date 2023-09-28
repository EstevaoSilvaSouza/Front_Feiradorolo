import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from './context/Auth.provider';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <ToastContainer/>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
    </>
);



