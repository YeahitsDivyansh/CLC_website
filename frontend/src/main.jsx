import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AuthProvider } from './context/AuthContext.jsx';
import { NotificationsContextProvider } from './context/NotificationContext.jsx';


export const server = "https://strapi-server-app-xw9w.onrender.com";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <NotificationsContextProvider>
      <App />
    </NotificationsContextProvider>
  </AuthProvider>,
)
