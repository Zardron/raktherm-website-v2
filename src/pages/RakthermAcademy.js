import React from "react";
import TopBar from "../component/TopBar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SubFooter from "../component/SubFooter";
import QuickLink from "../component/QuickLink";
import { useParams } from "react-router-dom";
import { ABOUT_US } from "../assets/data/WidgetData";
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
  WidgetDetails,
  Details,
  Title,
  WidgetSubTitle,
  ChecklistContainer,
  Check,
  Button,
  PDF,
  PDFButton,
} from "../assets/styled/RakthermAcademy";

const RakthermAcademy = () => {
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
                    <BannerTitleLine>|</BannerTitleLine>RAKTHERM GLOBAL ACADEMY
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
              <ActiveLink>RAKtherm Global Academy</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          <Container>
            <Wrapper>
              <LeftPanel>
                <WidgetTitle>ABOUT RAKTHERM</WidgetTitle>
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
                <Title>RAKTHERM GLOBAL ACADEMY</Title>

                <WidgetSubTitle>
                  LEARN FROM US! GET TRAINED BY THE EXPERTS AT RAKTHERM GLOBAL
                  ACADEMY!
                </WidgetSubTitle>
                <WidgetDetails>
                  Grab the opportunity to get yourself certified and trained by
                  the leaders in the piping industry and give your career a jump
                  start.
                </WidgetDetails>
                <WidgetDetails>
                  Establish yourself in the plumbing industry! Churn your skills
                  to be your own boss and learn ways to set up your own business
                  in the plumbing field!
                </WidgetDetails>
                <WidgetDetails>
                  Our program is the foundation of plumbing knowledge expertise
                  which provides trainings and skills in a more in-depth level.
                </WidgetDetails>
                <WidgetDetails>
                  Why not get the training that can help you turn pro at
                  RAKtherm? Advance you skills and qualifications in the
                  plumbing and piping industry!
                </WidgetDetails>
                <ChecklistContainer>
                  <Check />
                  <Details>
                    We have specialized training programs where you will gain
                    the skills to perform plumbing works and gain technical
                    expertise on jobs including engineers, planners, and
                    plumbers.
                  </Details>
                </ChecklistContainer>

                <ChecklistContainer>
                  <Check />
                  <Details>
                    Get exclusive hands-on-experience on new and up-coming
                    projects in the plumbing industry.
                  </Details>
                </ChecklistContainer>

                <ChecklistContainer>
                  <Check />
                  <Details>
                    We provide on-site technical trainings, site inspections and
                    presentations for construction industry engineers.
                  </Details>
                </ChecklistContainer>

                <ChecklistContainer>
                  <Check />
                  <Details>
                    Exclusive plumbing training programs for beginners seeking
                    to establish a career as MEP engineer or to reinforce
                    selling and marketing skills to take up a career as a
                    seller, installer, home user, and others.
                  </Details>
                </ChecklistContainer>

                <ChecklistContainer>
                  <Check />
                  <Details>
                    Gain the advantage of learning the “Green Energy” of which
                    82% of energy used for domestic purposes can be controlled
                    by plumbers by mastering the Green Energy Efficiency
                    Techniques.
                  </Details>
                </ChecklistContainer>

                <ChecklistContainer>
                  <Check />
                  <Details>
                    Learn exclusively from RAKtherm Academy’s training programs
                    the measures of promoting green energy efficiency and
                    techniques on how to reduce carbon footprints that are in
                    strict pattern of compliance with government regulations
                    initiated by the government.
                  </Details>
                </ChecklistContainer>

                <WidgetSubTitle style={{ marginBottom: "20px" }}>
                  BE AN EXPERT AND REGISTER NOW!
                </WidgetSubTitle>

                <Button>Register Now</Button>

                <WidgetDetails>
                  For further information contact RAKtherm Academy at:
                  academy@raktherm.com
                </WidgetDetails>
                <PDFButton>
                  <PDF />
                  RAKTHERM ACADEMY FLYER
                </PDFButton>
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

export default RakthermAcademy;
