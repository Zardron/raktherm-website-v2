import React from "react";
import { SignUp, Topbar } from "../assets/styled/TopbarStyle";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import SubFooter from "../component/SubFooter";
import styled from "styled-components";
import _BANNER from "../assets/images/about-us-banner.jpg";

const BannerPage = styled.div`
  background-image: url("https://res.cloudinary.com/dmbpo49ak/image/upload/v1680333183/RAKtherm/BANNERS/about-us-banner_dqgef2.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  padding-top: 55vh;
  border-bottom: 3px solid #008053;
`;
const BannerTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 0.77;
  position: relative;
  margin: 0 0 15px 0;
  padding-left: 15px;
  text-transform: uppercase;
  color: #ffffff !important;
`;

const BannerTitleLine = styled.span`
  position: absolute;
  left: 0;
  color: #008053;
  font-size: 25px;
  font-weight: 900;
`;

const BannerTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const AboutUs = () => {
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
      <BannerPage>
        <div className="containers">
          <Content>
            <BannerTitleWrapper>
              <BannerTitle>
                <BannerTitleLine>|</BannerTitleLine>ABOUT US
              </BannerTitle>
            </BannerTitleWrapper>
          </Content>
        </div>
      </BannerPage>
      <SubFooter />
      <Footer />
    </>
  );
};

export default AboutUs;
