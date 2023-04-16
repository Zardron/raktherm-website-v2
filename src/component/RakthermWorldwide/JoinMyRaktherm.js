import React from "react";
import styled from "styled-components";
import {
  JoinMyRakthermBtn,
  WidgetDetails,
  WidgetSubTitle,
} from "../../assets/styled/RakthermWorldwide";
import { BiLike } from "react-icons/bi";
import { MdFormatIndentIncrease } from "react-icons/md";
import { FaUsers, FaDownload } from "react-icons/fa";

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

const JoinMyRaktherm = () => {
  return (
    <>
      <Div>
        <ItalicText>
          Join My RAKtherm And Get Connected With The MEP Global Community!
        </ItalicText>
      </Div>
      <TitleWrapper>
        <LineTitle>|</LineTitle>
        <Title>
          LEARN THE NEW STRATEGIES, RISE TO THE CHALLENGE AND BUILD NEW
          TECHNIQUES!
        </Title>
      </TitleWrapper>

      <Div>
        <WidgetDetails>
          Here, we create your own zone where you can interact with fellow
          technicians, share the success and challenges in your plumbing
          experience.
        </WidgetDetails>

        <WidgetDetails>
          As the construction industry continues to flourish along with the
          advancement of the construction technology, the need for technical
          principles and skills is necessary to address these developments.
          However, an obstacle in shortage of plumbing professionals is what
          hindering its further growth.
        </WidgetDetails>
        <WidgetDetails>
          According to Daily Mail Online UK news, this explains why younger
          generations should aspire to become plumbers, builders, and
          electricians. This skill crisis hits the industry, not only in the
          European region but is becoming a worldwide concern as well.
        </WidgetDetails>
        <WidgetDetails>
          In line with this, we are inviting you to join this community to share
          your ideas where we can acquire new skills and develop capabilities.
          We need your valuable contribution to resolve this issue and sustain
          the competitiveness of MEP industry.
        </WidgetDetails>
        <WidgetDetails>
          We believe that each of you have gained your own technical expertise
          for wide range of MEP solutions, and you are very much welcome to
          share it here for the benefit of the global MEP community.
        </WidgetDetails>

        <WidgetSubTitle style={{ fontSize: "14px", color: "#61728D" }}>
          HOW TO USE AND JOIN MY RAKTHERM?
        </WidgetSubTitle>
        <WidgetDetails style={{ marginBottom: "0px" }}>
          We’ve made it convenient to connect…
        </WidgetDetails>
        <WidgetDetails>
          Just click on, upload, and type into the submission form and your
          story will appear on this page!
        </WidgetDetails>
        <WidgetDetails style={{ paddingLeft: "30px", marginBottom: "0px" }}>
          <span style={{ fontWeight: "900", paddingRight: "10px" }}>•</span>{" "}
          Share your <strong>“MY SUCCESS STORIES”</strong> to inspire others on
          how you have overcome the plumbing challenges.
        </WidgetDetails>
        <WidgetDetails style={{ paddingLeft: "30px" }}>
          <span style={{ fontWeight: "900", paddingRight: "10px" }}>•</span>{" "}
          We’d love to see your <strong>“SPECIAL MOMENTS”</strong> and{" "}
          <strong>“MY TRAININGS”</strong> because your journey in the world of
          plumbing is important to us.
        </WidgetDetails>
        <JoinMyRakthermBtn>JOIN MY RAKTHERM</JoinMyRakthermBtn>

        <section class="image-gallery no-line plumbing-gallery" style={{marginTop: "75px"}}>
          <div class="container">
            <div class="heading-main">
              <div class="list-block-icon-2">
                <div class="item">
                  <div class="block-icon-2">
                    <div class="icon-cell">
                      <a>
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
                            <BiLike class="img-icon" />
                          </i>
                        </div>
                      </a>
                    </div>
                    <div class="icon-cell">
                      <div class="wrapper-info">
                        <div class="title">
                          <a class="link">MY SUCCESS STORIES</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="block-icon-2">
                    <div class="icon-cell">
                      <a>
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
                            <MdFormatIndentIncrease class="img-icon" />
                          </i>
                        </div>
                      </a>
                    </div>
                    <div class="icon-cell">
                      <div class="wrapper-info">
                        <div class="title">
                          <a class="link">MY SPECIAL MOMENTS</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="block-icon-2">
                    <div class="icon-cell">
                      <a>
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
                            <FaUsers class="img-icon" />
                          </i>
                        </div>
                      </a>
                    </div>
                    <div class="icon-cell">
                      <div class="wrapper-info">
                        <div class="title">
                          <a class="link">MY TRAINING</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="block-icon-2">
                    <div class="icon-cell">
                      <a>
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
                            <FaDownload class="img-icon" />
                          </i>
                        </div>
                      </a>
                    </div>
                    <div class="icon-cell">
                      <div class="wrapper-info">
                        <div class="title">
                          <a class="link">CATALOGUES & DOWNLOADS</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Div>
    </>
  );
};

export default JoinMyRaktherm;
