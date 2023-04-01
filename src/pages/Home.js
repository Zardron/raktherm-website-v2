import React from "react";
import { SignUp, Topbar } from "../assets/styled/TopbarStyle";
import Navbar from "../component/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import OVERLAY from "../assets/images/RAKTHERM-VIDEO-OVERLAY.jpg";
import Video1 from "../assets/video/NOW-5-Layers-Reinforced-Pipes.mp4";
import VideoCarousel from "../component/VideoCarousel";
import HomeCarousel from "../component/HomeCarousel";
import HomeContent from "../component/HomeContent";
import SubFooter from "../component/SubFooter";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Topbar>
        <div class="containers" style={{ padding: "5px 25px" }}>
          <SignUp>Sign up to Join My RAKtherm</SignUp>
        </div>
      </Topbar>
      <div class="containers">
        <Navbar />
      </div>
      <HomeCarousel />
      <div className="containers">
        <VideoCarousel overlay={OVERLAY} video={Video1} />
      </div>
      <HomeContent />
      <SubFooter />
      <Footer />
    </>
  );
};

export default Home;
