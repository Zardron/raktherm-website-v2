import React from "react";
import Slider from "react-slick";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import OVERLAY from "../assets/images/RAKTHERM-VIDEO-OVERLAY.jpg";
import { VideoData } from "../assets/data/VideoData";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 1270px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const VideoLabel = styled.div`
  text-align: left;
  position: relative;
  padding: 0px 20px;
  color: #3a4d6a;
  font-size: 16px;
  margin: 5px 0;
  font-weight: 500;
`;

const LineTitle = styled.span`
  text-align: left;
  position: relative;
  color: #008053;
  font-size: 26px;
  font-weight: 900;
`;

const Title = styled.h2`
  text-align: left;
  position: relative;
  color: #3a4d6a;
  font-size: 30px;
  font-weight: 500;
  padding: 0px 0px 0px 10px;
`;

function NextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <MdOutlineArrowForwardIos style={{ color: "#3a4d6a" }} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <MdOutlineArrowBackIos style={{ color: "#3a4d6a" }} />
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
    <>
      <VideoContainer>
        <TitleWrapper>
          <LineTitle>|</LineTitle>
          <Title>VIDEO GALLERY</Title>
        </TitleWrapper>
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
              <VideoLabel>{item.title}</VideoLabel>
            </div>
          ))}
        </Slider>
      </VideoContainer>
    </>
  );
};

export default VideoCarousel;
