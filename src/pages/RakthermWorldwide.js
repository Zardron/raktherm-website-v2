import React from "react";
import TopBar from "../component/TopBar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SubFooter from "../component/SubFooter";
import QuickLink from "../component/QuickLink";
import { useParams } from "react-router-dom";
import { RAKTHERM_WORLDWIDE } from "../assets/data/WidgetData";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Container,
  Wrapper,
  LeftPanel,
  RightPanel,
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
  WidgetTitle,
  ArrowRight,
  WidgetContent,
  WidgetLink,
  ProjectContent,
} from "../assets/styled/RakthermWorldwide";
import GlobalNetworks from "../component/RakthermWorldwide/GlobalNetworks";
import MegaProjects from "../component/RakthermWorldwide/MegaProjects";
import MegaProjectDetails from "../component/RakthermWorldwide/MegaProjectDetails";
import BecomeStockist from "../component/RakthermWorldwide/BecomeStockist";

const RakthermWorldwide = () => {
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
                    <BannerTitleLine>|</BannerTitleLine>RAKTHERM Worldwide
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
              <ActiveLink>RAKtherm Worldwide</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          <Container>
            <Wrapper>
              <LeftPanel>
                <WidgetTitle>RAKTHERM WORLDWIDE</WidgetTitle>
                {RAKTHERM_WORLDWIDE.map((item, index) => (
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
                {title === "global-networks" && <GlobalNetworks />}
                {title === "mega-projects" && <MegaProjects />}
                {title === "become-stockist" && <BecomeStockist />}
              </RightPanel>
            </Wrapper>
          </Container>
        </WidgetContent>

        {title === "mega-projects" && (
          <ProjectContent>
            <Container  style={{paddingTop: "25px"}}>
              <MegaProjectDetails />
            </Container>
          </ProjectContent>
        )}
      </BannerPage>
      <SubFooter />
      <Footer />
    </>
  );
};

export default RakthermWorldwide;
