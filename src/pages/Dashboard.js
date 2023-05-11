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
import { DASHBOARD_LINKS } from "../assets/data/WidgetData";
import useAuth from "../redux/hooks/useAuth";
import Home from "../component/Dashboard/Home";
import UpdateProfile from "../component/Dashboard/UpdateProfile";

const Dashboard = () => {
  const { title } = useParams();
  const data = useAuth();

  const { picture } = data;

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
                    <BannerTitleLine>|</BannerTitleLine>DASHBOARD
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
              <ActiveLink>Dashboard</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          <Container>
            <Wrapper>
              <LeftPanel>
                <WidgetTitle>PROFILE</WidgetTitle>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #00805378",
                    padding: "10px 0px",
                    marginBottom: "10px",
                  }}
                >
                  <img src={picture} style={{ width: "220px" }} />
                </div>

                {title === "update-profile" && (
                  <>
                    <Label>Update Profile Picture</Label>
                    <ChangeProfile
                      style={{ marginBottom: "25px", paddingBottom: "10px" }}
                      type="file"
                    />
                  </>
                )}

                {DASHBOARD_LINKS.map((item, index) => (
                  <>
                    <WidgetLink to={`${item.link}`} key={index}>
                      {item.title}
                      <ArrowRight />
                    </WidgetLink>
                  </>
                ))}
                {/* <QuickLink /> */}
              </LeftPanel>

              <RightPanel>
                {title === "home" && <Home />}{" "}
                {title === "update-profile" && <UpdateProfile />}
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
  width: 20%;
  padding-right: 10px;
`;

const RightPanel = styled.div`
  padding-left: 10px;
  width: 80%;
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

export const ChangeProfile = styled.input`
  font-family: "Montserrat", sans-serif;
  line-height: 40px;
  font-weight: 400;
  font-size: 14px;
  width: 100%;
  margin-bottom: 5px;
  padding: 10px;
  resize: none;
  color: #61728d;
  border: none;
  border: 1px solid #d8d8d8;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 3px;

  background-color: transparent;
  box-shadow: none !important;
  transition: all 0.1s ease;

  ::file-selector-button {
    color: white;
    background-color: #008053;
    padding: 0.5em;
    border: 2px solid #008053;
    border-radius: 3px;

    :hover {
      color: #008053;
      background-color: white;
      border: 2px solid #008053;
    }
  }
`;

const Label = styled.div`
  text-align: justify;
  font-weight: 500;
  font-size: 14px;
  color: #61728d;
`;

export default Dashboard;
