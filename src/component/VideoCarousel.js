import React from "react";
import Slider from "react-slick";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import OVERLAY from "../assets/images/RAKTHERM-VIDEO-OVERLAY.jpg";
import { VideoData } from "../assets/data/VideoData";

function NextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <MdOutlineArrowForwardIos />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <MdOutlineArrowBackIos />
    </div>
  );
}

const VideoCarousel = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings} style={{ padding: "20px 60px" }}>
        {VideoData.map((item, key) => (
          <div>
            <video
              width="100%"
              controls
              poster={OVERLAY}
              key={key}
              style={{ padding: "0px 20px" }}
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p style={{padding: "10px 20px"}}>{item.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
