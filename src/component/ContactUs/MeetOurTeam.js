import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Container = styled.div`
  width: 1270px;
  margin-right: auto;
  margin-left: auto;
`;

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
      <Container>
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
          <div className="list-contact-info" style={{ padding: "20px 15px" }}>
            <h5 className="title">
              Corporate Sales Head Quarter and Technical Hub
            </h5>
            <div className="item">
              <div className="contact-info-box">
                <div className="contact-info-cell">
                  <div
                    className="wrapper-icons"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaMapMarkerAlt className="icons" />
                  </div>
                </div>
                <div className="contact-info-cell">
                  <div className="wrapper-info">
                    <p className="text" style={{ fontWeight: "500" }}>
                      PO Box 30739,
                      <br /> Al Jazeera Al Hamra,
                      <br /> Ras al Khaimah,
                      <br /> United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="contact-info-box">
                <div className="contact-info-cell">
                  <div
                    className="wrapper-icons"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaMapMarkerAlt className="icons" />
                  </div>
                </div>
                <div className="contact-info-cell">
                  <div className="wrapper-info">
                    <div className="text" style={{ fontWeight: "500" }}>
                      Trunk line:
                      <a href="tel:00971 7 244 7128" className="text-bold">
                        00971 7 244 7128
                      </a>
                    </div>
                    <div className="text" style={{ fontWeight: "500" }}>
                      Toll Free:
                      <a href="tel:00971 7 244 7128" className="text-bold">
                        800 - RAKTHERM (72584376)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="contact-info-box">
                <div className="contact-info-cell">
                  <div
                    className="wrapper-icons"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaMapMarkerAlt className="icons" />
                  </div>
                </div>
                <div className="contact-info-cell">
                  <div className="wrapper-info">
                    <div className="text" style={{ fontWeight: "500" }}>
                      Fax:
                      <a href="tel:00971 7 244 7128" className="text-bold">
                        00971 7 244 7129
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainContact>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14387.103492697215!2d55.78442!3d25.6455631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5e1c0d9eb05e5%3A0xaf76a50cba5127ea!2sGulf%20Plastic%20%26%20Converting%20Industries%20(Head%20Office%2FFactory)!5e0!3m2!1sen!2sae!4v1681633953622!5m2!1sen!2sae"
        width="100%"
        height="550"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <Container>
        <div className="list-contact-info" style={{padding: "50px 15px 50px 15px"}}>
          <div className="item">
            <div className="contact-info-box">
              <div className="contact-info-cell">
                <div
                  className="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MdEmail className="icons" />
                </div>
              </div>
              <div className="contact-info-cell">
                <div className="wrapper-info">
                  <div className="text">
                    Corporate Sales & Marketing Department
                    <a href="mailto:sales@raktherm.com" className="text-bold">
                      sales@raktherm.com
                    </a>
                  </div>
                  <div className="text">
                    <a
                      href="mailto:marketing@raktherm.com"
                      className="text-bold"
                    >
                      marketing@raktherm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="contact-info-box">
              <div className="contact-info-cell">
                <div
                  className="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MdEmail className="icons" />
                </div>
              </div>
              <div className="contact-info-cell">
                <div className="wrapper-info">
                  <div className="text">
                    RAKtherm Global Academy:
                    <a href="mailto:academy@raktherm.com" className="text-bold">
                      academy@raktherm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="contact-info-box">
              <div className="contact-info-cell">
                <div
                  className="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MdEmail className="icons" />
                </div>
              </div>
              <div className="contact-info-cell">
                <div className="wrapper-info">
                  <div className="text">
                    Customer Service
                    <a
                      href="mailto:customerservices@raktherm.com"
                      className="text-bold"
                    >
                      customerservices@raktherm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="contact-info-box">
              <div className="contact-info-cell">
                <div
                  className="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MdEmail className="icons" />
                </div>
              </div>
              <div className="contact-info-cell">
                <div className="wrapper-info">
                  <div className="text">
                    Technical Department
                    <a
                      href="mailto:Tech.dept@raktherm.com"
                      className="text-bold"
                    >
                      Tech.dept@raktherm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="contact-info-box">
              <div className="contact-info-cell">
                <div
                  className="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MdEmail className="icons" />
                </div>
              </div>
              <div className="contact-info-cell">
                <div className="wrapper-info">
                  <div className="text">
                    Finance Department
                    <a href="mailto:finance@raktherm.com" className="text-bold">
                      finance@raktherm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="contact-info-box">
              <div className="contact-info-cell">
                <div
                  className="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MdEmail className="icons" />
                </div>
              </div>
              <div className="contact-info-cell">
                <div className="wrapper-info">
                  <div className="text">
                    Research & Development Department
                    <a href="mailto:rd@raktherm.com" className="text-bold">
                      rd@raktherm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="contact-info-box">
              <div className="contact-info-cell">
                <div
                  className="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MdEmail className="icons" />
                </div>
              </div>
              <div className="contact-info-cell">
                <div className="wrapper-info">
                  <div className="text">
                    Purchase Department
                    <a
                      href="mailto:purchase@raktherm.com"
                      className="text-bold"
                    >
                      purchase@raktherm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="contact-info-box">
              <div className="contact-info-cell">
                <div
                  className="wrapper-icons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MdEmail className="icons" />
                </div>
              </div>
              <div className="contact-info-cell">
                <div className="wrapper-info">
                  <div className="text">
                    HR Department
                    <a href="mailto:hr@raktherm.com" className="text-bold">
                      hr@raktherm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MeetOurTeam;
