import React from "react";
import TopBar from "../../component/TopBar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import SubFooter from "../../component/SubFooter";
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
  LeftPanel,
  RightPanel,
  Wrapper,
} from "../../assets/styled/PlumberCommunity";
import { useParams } from "react-router-dom";
import PlumberMenu from "./PlumberMenu";
import PlumberWall from "./PlumberWall";
import PlumberChallenges from "./PlumberChallenges";
import PlumberRewards from "./PlumberRewards";
import PlumberChatbox from "./PlumberChatbox";
import PlumberSideMenu from "./PlumberSideMenu";

const PlumberPanel = () => {
  const loggedIn = false;
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
                    <BannerTitleLine>|</BannerTitleLine>PLUMBER COMMUNITY {title.toLocaleUpperCase()}
                  </BannerTitle>
                </BannerTitleWrapper>
              </AboutUsDetails>
              <GetInTouchDetails>
                <GetInTouch>GET IN TOUCH</GetInTouch>
              </GetInTouchDetails>
            </AboutUsWrapper>

            <HomeLink to="/">
              {title === "menu" ? "Profile" : "Menu"}
              <Arrow>
                <MdOutlineKeyboardArrowRight />
              </Arrow>{" "}
              <ActiveLink>Plumber Community {title}</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          {title === "menu" && (
            <Container>
              <PlumberMenu />
            </Container>
          )}

          {title === "wall" && (
            <Container>
              <Wrapper>
                <LeftPanel style={{paddingRight: "30px"}}>
                  <PlumberSideMenu />
                </LeftPanel>

                <RightPanel>
                  <PlumberWall />
                </RightPanel>
              </Wrapper>
            </Container>
          )}

          {title === "chatbox" && (
            <Container>
              <Wrapper>
                <LeftPanel style={{paddingRight: "30px"}}>
                  <PlumberSideMenu />
                </LeftPanel>
                <RightPanel>
                  <PlumberChatbox />
                </RightPanel>
              </Wrapper>
            </Container>
          )}

          {title === "challenges" && (
            <Container>
              <Wrapper>
                <LeftPanel style={{paddingRight: "30px"}}>
                  <PlumberSideMenu />
                </LeftPanel>
                <RightPanel>
                  <PlumberChallenges />
                </RightPanel>
              </Wrapper>
            </Container>
          )}

          {title === "rewards" && (
            <Container>
              <Wrapper>
                <LeftPanel style={{paddingRight: "30px"}}>
                  <PlumberSideMenu />
                </LeftPanel>
                <RightPanel>
                  <PlumberRewards />
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

export default PlumberPanel;
