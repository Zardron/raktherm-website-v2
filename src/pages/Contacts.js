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
} from "../assets/styled/ContactStyle";
import { useParams } from "react-router-dom";
import MeetOurTeam from "../component/ContactUs/MeetOurTeam";
import JoinOurTeam from "../component/ContactUs/JoinOurTeam";

const Contacts = () => {
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
                    <BannerTitleLine>|</BannerTitleLine>Contact us
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
              <ActiveLink>Contacts</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          <Container style={{ paddingBottom: "50px" }}>
            {title === "meet-our-team" && <MeetOurTeam />}
            {title === "join-our-team" && <JoinOurTeam />}
          </Container>
        </WidgetContent>
      </BannerPage>
      <SubFooter />
      <Footer />
    </>
  );
};

export default Contacts;
