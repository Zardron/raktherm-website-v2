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
  padding: 25px 0;
`;

const PlumberMenu = () => {
  return (
    <>
        <TITLE>MENU</TITLE>
        <div class="container">
          <div class="heading-main">
            <div class="list-block-icon-2">
              <div class="item">
                <div class="block-icon-2">
                  <div class="icon-cell">
                    <Link to={"/plumber-community/wall"}>
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
                        <a class="link">COMMUNITY WALL</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="block-icon-2">
                  <div class="icon-cell">
                    <Link to={"/plumber-community/chatbox"}>
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
                        <a class="link">CHATBOX</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="block-icon-2">
                  <div class="icon-cell">
                    <Link to={"/plumber-community/challenges"}>
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
                        <a class="link">CHALLENGES</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="block-icon-2">
                  <div class="icon-cell">
                    <Link to={"/plumber-community/rewards"}>
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
                        <a class="link">REWARDS</a>
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
    </>
  );
};

export default PlumberMenu;
