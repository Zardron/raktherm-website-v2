import React from "react";
import styled from "styled-components";
import {
  JoinBtn,
  WidgetDetails,
  WidgetSubTitle,
} from "../../assets/styled/RakthermWorldwide";
import { TfiGallery } from "react-icons/tfi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { BsGift, BsListTask } from "react-icons/bs";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from "react-router-dom";
import useAuth from "../../redux/hooks/useAuth";

const PlumberHome = () => {
  const { active } = useAuth();

  return (
    <>
      <Div>
        <TitleWrapper>
          <LineTitle>|</LineTitle>
          <Title>
            JOIN OUR PLUMBER COMMUNITY, A BETTER WAY TO GET CONNECTED TO YOUR
            FELLOW PLUMBERS!
          </Title>
        </TitleWrapper>
      </Div>
      <ItalicText>
        Where You Can Share Your Skills, Talents And Achievements.
      </ItalicText>

      <Div style={{ paddingTop: "25px" }}>
        <WidgetDetails>
          Here, we created our own social platform intended for plumbers, where
          they can interact with other plumbers by sharing your success and
          challenges in your plumbing experience in plumber community wall,
          express yourself and get connected to other plumbers by joining our
          public chat box and also complete some task in plumber challenges to
          get a change to redeem RAKtherm Merchandise.
        </WidgetDetails>

        <WidgetSubTitle
          style={{ fontSize: "14px", color: "#61728D", marginBottom: "5px" }}
        >
          HOW TO USE AND JOIN MY RAKTHERM?
        </WidgetSubTitle>

        <Div style={{ paddingBottom: "15px", paddingTop: "0px" }}>
          <WrapperDetails>
            <Img src="https://www.altudo.co/dist/altudo/static/media/triangle-icon.6c3d112140de5308298e.svg" />
            <Text>
              You need to <LinkText>REGISTER</LinkText> an account.
            </Text>
          </WrapperDetails>

          <WrapperDetails>
            <Img src="https://www.altudo.co/dist/altudo/static/media/triangle-icon.6c3d112140de5308298e.svg" />
            <Text>
              After registering your account, you may now{" "}
              <LinkText>LOGIN</LinkText> your account.
            </Text>
          </WrapperDetails>

          <WrapperDetails>
            <Img src="https://www.altudo.co/dist/altudo/static/media/triangle-icon.6c3d112140de5308298e.svg" />
            <Text>
              Once you've login, into your <LinkText>PROFILE</LinkText> just
              click the <LinkText>PLUMBER COMMUNITY</LinkText>
            </Text>
          </WrapperDetails>

          <WrapperDetails>
            <Img src="https://www.altudo.co/dist/altudo/static/media/triangle-icon.6c3d112140de5308298e.svg" />
            <Text>
              You can select whatever you want from the{" "}
              <LinkText to={"/plumber-community/menu"}>MENU</LinkText> you want
              to visit.
            </Text>
          </WrapperDetails>

          <WidgetDetails style={{ marginBottom: "0px" }}>
            <ul>
              <li style={{ listStyle: "square", marginLeft: "68px" }}>
                <p style={{ paddingBottom: "5px" }}>
                  <LinkText>COMMUNITY WALL</LinkText> - You can share whatever
                  you want to share with your fellow plumbers and hear their
                  reactions about what you share.
                </p>
              </li>
              <li style={{ listStyle: "square", marginLeft: "68px" }}>
                <p style={{ paddingBottom: "5px" }}>
                  <LinkText>CHATBOX</LinkText> - You need to enter your name to
                  join our Public Chat box.
                </p>
              </li>
              <li style={{ listStyle: "square", marginLeft: "68px" }}>
                <p style={{ paddingBottom: "5px" }}>
                  <LinkText>CHALLENGES</LinkText> - You need to finish the task
                  (ex. Daily login for 7 days) found in the challenges to earn
                  points.<span style={{ fontStyle: "italic" }}>(Optional)</span>
                </p>
              </li>
              <li style={{ listStyle: "square", marginLeft: "68px" }}>
                <p style={{ paddingBottom: "5px" }}>
                  <LinkText>REWARDS</LinkText> - By earning points from the task
                  you finish in challenges, you can redeem RAKtherm Merchandise
                  as a reward.
                </p>
              </li>
            </ul>
          </WidgetDetails>
        </Div>

        <WrapperDetails>
          <JoinBtn style={{ marginRight: "5px" }}>
            PLUMBER COMMUNITY USER GUIDE
          </JoinBtn>
          {active ? (
            <JoinBtn to={"/dashboard/home"}>JOIN NOW</JoinBtn>
          ) : (
            <JoinBtn to={"/account"}>JOIN NOW</JoinBtn>
          )}
        </WrapperDetails>

        <TITLE>WHAT WE OFFER?</TITLE>
        <div class="container">
          <div class="heading-main">
            <div class="list-block-icon-2">
              <div class="item">
                <div class="block-icon-2">
                  <div class="icon-cell">
                    <Link>
                      <div class="wrapper-icons">
                        <i
                          class="icons"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: "0",
                          }}
                        >
                          <TfiGallery class="img-icon" />
                        </i>
                      </div>
                    </Link>
                  </div>
                  <div class="icon-cell">
                    <div class="wrapper-info">
                      <div class="title">
                        <Link class="link">COMMUNITY WALL</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="block-icon-2">
                  <div class="icon-cell">
                    <Link>
                      <div class="wrapper-icons">
                        <i
                          class="icons"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: "0",
                          }}
                        >
                          <HiOutlineChatBubbleLeftRight class="img-icon" />
                        </i>
                      </div>
                    </Link>
                  </div>
                  <div class="icon-cell">
                    <div class="wrapper-info">
                      <div class="title">
                        <Link class="link">CHATBOX</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="block-icon-2">
                  <div class="icon-cell">
                    <Link>
                      <div class="wrapper-icons">
                        <i
                          class="icons"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: "0",
                          }}
                        >
                          <BsListTask class="img-icon" />
                        </i>
                      </div>
                    </Link>
                  </div>
                  <div class="icon-cell">
                    <div class="wrapper-info">
                      <div class="title">
                        <Link class="link">CHALLENGES</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="block-icon-2">
                  <div class="icon-cell">
                    <Link>
                      <div class="wrapper-icons">
                        <i
                          class="icons"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: "0",
                          }}
                        >
                          <BsGift class="img-icon" />
                        </i>
                      </div>
                    </Link>
                  </div>
                  <div class="icon-cell">
                    <div class="wrapper-info">
                      <div class="title">
                        <Link class="link">REWARDS</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container>
          <Panel>
            <WidgetDetails>
              <ReactReadMoreReadLess
                charLimit={108}
                readMoreText={"Read more"}
                readLessText={"Read less"}
                readMoreStyle={{
                  color: "#008053",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
                readLessStyle={{
                  color: "#008053",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
              >
                A Freedom Wall for Plumbers to share their Skills, Talents, and
                Achievements. A wall where they can interact there Fellow
                Plumbers.
              </ReactReadMoreReadLess>
            </WidgetDetails>
          </Panel>
          <Panel>
            <WidgetDetails>
              <ReactReadMoreReadLess
                charLimit={105}
                readMoreText={"Read more"}
                readLessText={"Read less"}
                readMoreStyle={{
                  color: "#008053",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
                readLessStyle={{
                  color: "#008053",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
              >
                A public chatbox will help the plumbers to interact with other
                Plumbers, Just simply enter your name and hit continue to join
                the public chatbox.
              </ReactReadMoreReadLess>
            </WidgetDetails>
          </Panel>
          <Panel>
            <WidgetDetails>
              <ReactReadMoreReadLess
                charLimit={116}
                readMoreText={"Read more"}
                readLessText={"Read less"}
                readMoreStyle={{
                  color: "#008053",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
                readLessStyle={{
                  color: "#008053",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
              >
                These challenges is like a task (ex. you need to login straight
                7days.) that you will need finish it to earn points and every
                challenges you completed, You will unlock new challenges where
                you can gain more points. The more points you've earned, the
                best reward you can redeem.
              </ReactReadMoreReadLess>
            </WidgetDetails>
          </Panel>
          <Panel>
            <WidgetDetails>
              <ReactReadMoreReadLess
                charLimit={93}
                readMoreText={"Read more"}
                readLessText={"Read less"}
                readMoreStyle={{
                  color: "#008053",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
                readLessStyle={{
                  color: "#008053",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
              >
                The Plumber can earn points by completing some challenges found
                in "Plumber Challenges" and each challenges has corresponding
                points that will be used to redeem special RAKtherm merchandise
                like Pen, T-Coaster, Head Cap, and Polo T-Shirt.
              </ReactReadMoreReadLess>
            </WidgetDetails>
          </Panel>
        </Container>
      </Div>
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
`;

const ItalicText = styled.span`
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  margin: 0;
  text-transform: capitalize;
  color: #aab7ca;
`;

const LineTitle = styled.span`
  text-align: left;
  position: relative;
  color: #008053;
  font-size: 27px;
  font-weight: 900;
`;

const Title = styled.p`
  text-align: left;
  position: relative;
  color: #3a4d6a;
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 0px 10px;
`;

const Div = styled.div`
  padding-top: 50px;
`;

const Container = styled.div`
  padding-bottom: 25px;
  display: flex;
  justify-content: flex-start;
`;

const Panel = styled.div`
  flex: 1;
  text-align: justify;
  padding: 10px;
`;

const WrapperDetails = styled.div`
  display: flex;
  padding-bottom: 5px;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #61728d;
`;

const Img = styled.img`
  padding-left: 30px;
  padding-right: 10px;
`;

const LinkText = styled(Link)`
  color: black;
  font-weight: 700;
`;

const TITLE = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 46px;
  color: black;
  font-weight: 600;
  margin: 25px 0;
`;

export default PlumberHome;
