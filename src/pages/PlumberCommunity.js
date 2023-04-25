import React from "react";
import TopBar from "../component/TopBar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SubFooter from "../component/SubFooter";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Container,
  BannerPage,
  Content,
  BannerTitle,
  BannerTitleLine,
  BannerTitleWrapper,
  HomeLink,
  Arrow,
  ActiveLink,
  AboutUsWrapper,
  GetInTouch,
  AboutUsDetails,
  GetInTouchDetails,
  WidgetContent,
} from "../assets/styled/PlumberCommunity";
import PlumberHome from "../component/PlumberCommunity/PlumberHome";

const PlumberCommunity = () => {
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
                    <BannerTitleLine>|</BannerTitleLine>PLUMBER COMMUNITY
                  </BannerTitle>
                </BannerTitleWrapper>
              </AboutUsDetails>
              <GetInTouchDetails>
                <GetInTouch>GET IN TOUCH</GetInTouch>
              </GetInTouchDetails>
            </AboutUsWrapper>

            <HomeLink to="/">
              Profile{" "}
              <Arrow>
                <MdOutlineKeyboardArrowRight />
              </Arrow>{" "}
              <ActiveLink>Plumber Community</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          <Container>
           <PlumberHome />
          </Container>
        </WidgetContent>
      </BannerPage>
      <SubFooter />
      <Footer />
    </>
  );
};

export default PlumberCommunity;
