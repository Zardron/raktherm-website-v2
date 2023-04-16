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
  Wrapper,
  LeftPanel,
  WidgetTitle,
  WidgetLink,
  ArrowRight,
  RightPanel,
} from "../assets/styled/ContactStyle";
import { useParams } from "react-router-dom";
import MeetOurTeam from "../component/ContactUs/MeetOurTeam";
import JoinOurTeam from "../component/ContactUs/JoinOurTeam";
import QuickLink from "../component/QuickLink";
import { RAKTHERM_WORLDWIDE_CONTACT } from "../assets/data/WidgetData";

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
                    <BannerTitleLine>|</BannerTitleLine>
                    {title === "join-our-team" ? "JOIN OUR TEAM" : "Contact us"}
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
              <ActiveLink>
                {title === "join-our-team" ? "Join our Team" : "Contact us"}
              </ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          {title === "meet-our-team" && <MeetOurTeam />}
          {title === "join-our-team" && (
            <Container style={{ paddingBottom: "50px" }}>
              <Wrapper>
                <LeftPanel>
                  <WidgetTitle>RAKTHERM WORLDWIDE</WidgetTitle>
                  {RAKTHERM_WORLDWIDE_CONTACT.map((item, index) => (
                    <>
                      <WidgetLink
                        to={`/raktherm-worldwide/${item.link}`}
                        key={index}
                      >
                        {item.title}
                        <ArrowRight />
                      </WidgetLink>
                    </>
                  ))}

                  {title === "mega-projects" ? "" : <QuickLink />}
                </LeftPanel>

                <RightPanel>
                  {title === "join-our-team" && <JoinOurTeam />}
                </RightPanel>
              </Wrapper>
            </Container>
          )}
        </WidgetContent>
      </BannerPage>
      <SubFooter />
      <Footer />
    </>
  );
};

export default Contacts;
