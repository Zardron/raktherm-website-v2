import React from "react";
import styled from "styled-components";
import _BANNER from "../assets/images/solutions-banner.jpg";
import { Link, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import TopBar from "../component/TopBar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SubFooter from "../component/SubFooter";
import PipingTechnologies from "../component/Solutions/PipingTechnologies";
import PipingSystemsUsage from "../component/Solutions/PipingSystemUsage";
import UltimateSolutions from "../component/Solutions/UltimateSolutions";
import RakthermQuality from "../component/Solutions/RakthermQuality";
import { SOLUTIONS } from "../assets/data/WidgetData";
import { BsDot } from "react-icons/bs";
import { useRef } from "react";

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

const SolutionsContent = styled.div`
  background-color: white;
`;

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

const ProductRangeContainer = styled.div`
  padding-top: 30px;
`;

const WidgetLink = styled(Link)`
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

const WidgetSublink = styled(Link)`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #61728d;
  border-bottom: 1px solid #f1f6fd;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  margin-left: 40px;

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

const Dot = styled(BsDot)`
  color: #61728d;
  font-size: 30px;
  font-weight: 700;
`;

const Solutions = () => {
  const { title } = useParams();

  const div1 = useRef();
  const div2 = useRef();
  const div3 = useRef();
  const div4 = useRef();
  const div5 = useRef();
  const div6 = useRef();

  function smoothScroll(target) {
    const { top } = target.getBoundingClientRect();
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth",
    });
  }

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
                    <BannerTitleLine>|</BannerTitleLine>Solutions
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
              <ActiveLink>Solutions</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <SolutionsContent>
          <Container>
            <Wrapper>
              <LeftPanel>
                <WidgetTitle>Solutions</WidgetTitle>
                {SOLUTIONS.map((item, index) => (
                  <>
                    <WidgetLink to={`/solutions/${item.link}`} key={index}>
                      {item.title}
                      <ArrowRight />
                    </WidgetLink>
                  </>
                ))}

                <ProductRangeContainer>
                  <WidgetTitle>Quick link</WidgetTitle>
                  <WidgetLink
                    to="/solutions/piping-technologies"
                    onClick={
                      title === "piping-technologies"
                        ? () => smoothScroll(div1.current)
                        : ""
                    }
                  >
                    PPR Piping Systems <ArrowRight />
                  </WidgetLink>
                  <WidgetLink
                    to="/solutions/piping-technologies"
                    onClick={
                      title === "piping-technologies"
                        ? () => smoothScroll(div2.current)
                        : ""
                    }
                  >
                    MULTI-LAYER Reinforced PVC-U Piping Systems <ArrowRight />
                  </WidgetLink>
                  <WidgetSublink
                    to="/solutions/piping-technologies"
                    onClick={
                      title === "piping-technologies"
                        ? () => smoothScroll(div2.current)
                        : ""
                    }
                  >
                    <Dot />
                    Solvent Joint System
                  </WidgetSublink>
                  <WidgetSublink
                    to="/solutions/piping-technologies"
                    onClick={
                      title === "piping-technologies"
                        ? () => smoothScroll(div3.current)
                        : ""
                    }
                  >
                    <Dot />
                    Push-Fit Joint System
                  </WidgetSublink>
                  <WidgetLink
                    onClick={
                      title === "piping-technologies"
                        ? () => smoothScroll(div4.current)
                        : ""
                    }
                  >
                    PEX Piping Systems <ArrowRight />
                  </WidgetLink>
                  <WidgetLink
                    onClick={
                      title === "piping-technologies"
                        ? () => smoothScroll(div5.current)
                        : ""
                    }
                  >
                    Anti-UV Piping Systems <ArrowRight />
                  </WidgetLink>
                  <WidgetLink
                    onClick={
                      title === "piping-technologies"
                        ? () => smoothScroll(div6.current)
                        : ""
                    }
                  >
                    Reinforced Piping Systems <ArrowRight />
                  </WidgetLink>
                </ProductRangeContainer>
              </LeftPanel>

              <RightPanel>
                {title === "piping-technologies" && (
                  <PipingTechnologies
                    div1={div1}
                    div2={div2}
                    div3={div3}
                    div4={div4}
                    div5={div5}
                    div6={div6}
                  />
                )}
                {title === "piping-systems-usage" && <PipingSystemsUsage />}
                {title === "ultimate-solutions" && <UltimateSolutions />}
                {title === "raktherm-quality" && <RakthermQuality />}
              </RightPanel>
            </Wrapper>
          </Container>
        </SolutionsContent>
      </BannerPage>
      <SubFooter />
      <Footer />
    </>
  );
};

export default Solutions;
