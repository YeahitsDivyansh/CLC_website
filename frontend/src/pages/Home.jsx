import React from "react";
import Image from "../components/mid-image/mid-image";
import Footer from "../components/footer/Footer";
import NotificationsSection from "../components/Notifications/notice";
import Dr_Alka from "../components/Dr.Alka/Dr.Alka";
import Achievements from "../components/Achievements/Achievements";
import Latest_Notice from "../components/Latest_Notice/Latest_Notice";
import At_A_Glance from "../components/At_A_Glance/At_A_Glance";

const Home = () => {
  return (
    <div>
      <Latest_Notice />
      <Image />
      <Dr_Alka />
      <At_A_Glance />
      <Achievements />
      <NotificationsSection />
      <Footer />
    </div>
  );
};

export default Home;
