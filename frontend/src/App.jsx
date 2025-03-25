import React from "react";
import Nav1 from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "./components/mid-image/mid-image";
import Footer from "./components/footer/Footer"
import NotificationsSection from "./components/Notifications/notice"



const App = () => {
  return (
    <div>
      <Nav1/>
      < Image/>
      <NotificationsSection/>
      <Footer/>
      
      
    </div>
  )
}


export default App