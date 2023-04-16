import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

const TitleWrapper = styled.div`
  display: flex;
  padding-top: 25px;
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

const Div = styled.div``;

const MainContact = styled.div`
  margin-top: 50px;
  width: 100%;
  /* -webkit-transform: translateX(-50%); */
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  /* transform: translateX(-50%); */
  background-image: url("https://www.raktherm.com/assets/images/background/ruler.jpg");
  background-position: center;
  background-size: cover;
  box-shadow: 0 0 14px 4px rgba(0, 0, 0, 0.1);
  font-size: 0;
  padding: 50px 15px;
  background-color: #ffffff;
`;

const MeetOurTeam = () => {
  return (
    <>
      <TitleWrapper>
        <LineTitle>|</LineTitle>
        <Title>MEET OUR TEAM</Title>
      </TitleWrapper>
      <Div>
        <ItalicText>
          We Want To Hear From You! Whether You Have An Inquiry, Feedback, Or
          Simply Wants To Learn From Us…
        </ItalicText>
      </Div>

      <MainContact>
        <div class="list-contact-info" style={{ padding: "20px 15px" }}>
          <h5 class="title">Corporate Sales Head Quarter and Technical Hub</h5>
          <div class="item">
            <div class="contact-info-box">
              <div class="contact-info-cell">
                <div
                  class="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaMapMarkerAlt className="icons" />
                </div>
              </div>
              <div class="contact-info-cell">
                <div class="wrapper-info">
                  <p class="text" style={{ fontWeight: "500" }}>
                    PO Box 30739,
                    <br /> Al Jazeera Al Hamra,
                    <br /> Ras al Khaimah,
                    <br /> United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="contact-info-box">
              <div class="contact-info-cell">
                <div
                  class="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaMapMarkerAlt className="icons" />
                </div>
              </div>
              <div class="contact-info-cell">
                <div class="wrapper-info">
                  <div class="text" style={{ fontWeight: "500" }}>
                    Trunk line:
                    <a href="tel:00971 7 244 7128" class="text-bold">
                      00971 7 244 7128
                    </a>
                  </div>
                  <div class="text" style={{ fontWeight: "500" }}>
                    Toll Free:
                    <a href="tel:00971 7 244 7128" class="text-bold">
                      800 - RAKTHERM (72584376)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="contact-info-box">
              <div class="contact-info-cell">
                <div
                  class="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaMapMarkerAlt className="icons" />
                </div>
              </div>
              <div class="contact-info-cell">
                <div class="wrapper-info">
                  <div class="text" style={{ fontWeight: "500" }}>
                    Fax:
                    <a href="tel:00971 7 244 7128" class="text-bold">
                      00971 7 244 7129
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContact>
    </>
  );
};

export default MeetOurTeam;
