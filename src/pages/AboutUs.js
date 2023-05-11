import React from "react";
import styled from "styled-components";
import _BANNER from "../assets/images/about-us-banner.jpg";
import { Link, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import TopBar from "../component/TopBar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SubFooter from "../component/SubFooter";
import AGlance from "../component/AboutUs/AGlance";
import CorporateStrategy from "../component/AboutUs/CorporateStrategy";
import ChairmansMessage from "../component/AboutUs/ChairmansMessage";
import SustainedDevelopment from "../component/AboutUs/SustainedDevelopment";
import { ABOUT_US } from "../assets/data/WidgetData";
import QuickLink from "../component/QuickLink";

const Container = styled.div`
  width: 1270px;
  margin-right: auto;
  margin-left: auto;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
`;

const LeftPanel = styled.div`
  width: 25%;
  padding-right: 10px;
`;

const RightPanel = styled.div`
  padding-left: 10px;
  width: 75%;
`;

const BannerPage = styled.div`
  background-image: url(${_BANNER});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  padding-top: 41vh;
  border-bottom: 3px solid #008053;
  padding-bottom: 40px;
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

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  color: #d4e3ee;
  font-size: 14px;

  :hover {
    color: #d4e3ee;
  }
`;

const Arrow = styled.span`
  font-family: "Montserrat", sans-serif;
  color: #d4e3ee;
  font-size: 20px;
  padding: 0px 10px;
`;

const ActiveLink = styled.span`
  font-family: "Montserrat", sans-serif;
  color: #fff;
  font-size: 14px;
`;

const AboutUsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GetInTouch = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 30px;
  height: 32px;
  padding: 0 14px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #008053;
  -webkit-border-radius: 0;
  border: 2px solid white;
  -moz-border-radius: 0;
  border-radius: 0;
  background-color: #fff;

  :hover {
    background-color: transparent;
    border: 2px solid white;
    color: white;
  }
`;

const AboutUsDetails = styled.div``;

const GetInTouchDetails = styled.div``;

const WidgetTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #3a4d6a;
`;

const ArrowRight = styled(RiArrowDropRightLine)`
  font-size: 22px;
  float: right;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  opacity: 0;
`;

const WidgetContent = styled.div`
  background-color: white;
`;

const WidgetLink = styled(Link)`
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #61728d;
  border-bottom: 1px solid #f1f6fd;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;

  :hover {
    color: #008053;
    box-shadow: -2px 2px 0 0 #008053;
    padding: 10px 0px 10px 20px;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;

    ${ArrowRight} {
      opacity: 1 !important;
    }
  }
`;

const AboutUs = () => {
  const { title } = useParams();
  return (
    <>
      <TopBar />
      <Navbar />
      <BannerPage>
        <Container>
          <Content>
            <AboutUsWrapper>
              <AboutUsDetails>
                <BannerTitleWrapper>
                  <BannerTitle>
                    <BannerTitleLine>|</BannerTitleLine>ABOUT US
                  </BannerTitle>
                </BannerTitleWrapper>
              </AboutUsDetails>
              <GetInTouchDetails>
                <GetInTouch>GET IN TOUCH</GetInTouch>
              </GetInTouchDetails>
            </AboutUsWrapper>

            <HomeLink to="/">
              Home{" "}
              <Arrow>
                <MdOutlineKeyboardArrowRight />
              </Arrow>{" "}
              <ActiveLink>About us</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          <Container>
            <Wrapper>
              <LeftPanel>
                <WidgetTitle>ABOUT US</WidgetTitle>
                {ABOUT_US.map((item, index) => (
                  <>
                    <WidgetLink to={`/about-us/${item.link}`} key={index}>
                      {item.title}
                      <ArrowRight />
                    </WidgetLink>
                  </>
                ))}

                <QuickLink />
              </LeftPanel>

              <RightPanel>
                {title === "a-glance" && <AGlance />}
                {title === "corporate-strategy" && <CorporateStrategy />}
                {title === "chairmans-message" && <ChairmansMessage />}
                {title === "sustained-development" && <SustainedDevelopment />}
              </RightPanel>
            </Wrapper>
          </Container>
        </WidgetContent>
      </BannerPage>
      <SubFooter />
      <Footer />
    </>
  );
};

export default AboutUs;
