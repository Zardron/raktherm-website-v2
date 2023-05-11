import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
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
  InputField,
  Button,
  WidgetDetails,
} from "../assets/styled/AccountStyle";
import TopBar from "../component/TopBar";
import Navbar from "../component/Navbar";
import SubFooter from "../component/SubFooter";
import Footer from "../component/Footer";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router";
import CryptoJS from "crypto-js";

const AccountVerification = () => {
  const { email } = useParams();
  const errRef = useRef();
  const [verificationCode, setVerificationCode] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const hashEmail = localStorage.getItem("email-token");

  var bytes = CryptoJS.AES.decrypt(hashEmail, "RAKTHERM@2023");
  var originalEmail = bytes.toString(CryptoJS.enc.Utf8);

  useEffect(() => {
    setErrMsg("");
  }, [verificationCode]);

  useEffect(() => {
    errRef.current.focus();
  }, []);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    setErrMsg("Invalid verification code");
  };

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
                    <BannerTitleLine>|</BannerTitleLine>ACCOUNT VERIFICATION
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
              <ActiveLink>Account Verification</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          <Container>
            <TitleWrapper>
              <LineTitle>|</LineTitle>
              <Title>VERIFY YOUR ACCOUNT</Title>
            </TitleWrapper>

            <AccountWrapper>
              <Panel>
                <div class="blog-detail-wrapper">
                  <div class="comment-respond">
                    <h3 class="title">PLEASE VERIFY YOUR ACCOUNT</h3>
                    <p
                      ref={errRef}
                      style={{ color: "red", paddingBottom: "15px" }}
                      aria-live="assertive"
                    >
                      {errMsg}
                    </p>
                    <div class="contact-form-2"></div>
                    <WidgetDetails style={{ marginBottom: "0" }}>
                      Verification code is sent to this email -{" "}
                      <span style={{ color: "#0645AD" }}>{originalEmail}</span>
                    </WidgetDetails>
                    <WidgetDetails
                      style={{
                        fontWeight: "400",
                        fontStyle: "italic",
                        marginBottom: "15px",
                      }}
                    >
                      Kindly check your email and verify your account.
                    </WidgetDetails>
                    <form onSubmit={handleSubmitLogin}>
                      <InputField
                        placeholder="Please enter verification code"
                        ref={errRef}
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                      />
                      <Button
                        style={{
                          width: "30%",
                          marginRight: "10px",
                          marginBottom: "20px",
                        }}
                      >
                        Verify
                      </Button>
                    </form>
                  </div>
                </div>
              </Panel>
            </AccountWrapper>
          </Container>
        </WidgetContent>
      </BannerPage>
      <SubFooter />
      <Footer />
    </>
  );
};

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

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0px;
`;

const Panel = styled.div`
  width: 50%;
  padding: 20px;
`;

export default AccountVerification;
