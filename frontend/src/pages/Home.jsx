import React from 'react'
import Image from "../components/mid-image/mid-image";
import Footer from "../components/footer/Footer"
import NotificationsSection from "../components/Notifications/notice"
import Nav1 from '../components/Navbar/Navbar'
import Dr_Alka from "../components/Dr.Alka/Dr.Alka";

const Home = () => {
  return (
    <div>
        <Nav1/>
      <Image/>
      <Dr_Alka/>
      <NotificationsSection/>
      <Footer/>
    </div>
  )
}

export default Home
