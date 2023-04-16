import React from "react";
import Navbar from "../component/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import OVERLAY from "../assets/images/RAKTHERM-VIDEO-OVERLAY.jpg";
import Video1 from "../assets/video/NOW-5-Layers-Reinforced-Pipes.mp4";
import VideoCarousel from "../component/VideoCarousel";
import HomeCarousel from "../component/HomeCarousel";
import HomeContent from "../component/HomeContent";
import SubFooter from "../component/SubFooter";
import Footer from "../component/Footer";
import TopBar from "../component/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HomeCarousel />
      <VideoCarousel overlay={OVERLAY} video={Video1} />
      <HomeContent />
      <SubFooter />
      <Footer />
    </>
  );
};

export default Home;
