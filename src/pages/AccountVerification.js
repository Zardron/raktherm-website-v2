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
import { useNavigate, useParams } from "react-router";
import CryptoJS from "crypto-js";
import { useDeleteUserByEmailMutation } from "../redux/slice/api/usersApiSlice";
import { useBeforeunload } from "react-beforeunload";

const AccountVerification = () => {
  const { emailRoute } = useParams();
  const errRef = useRef();
  const [verificationCode, setVerificationCode] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const hashEmail = localStorage.getItem("email-token");
  const hashRoute = localStorage.getItem("verification-token");
  const verificationCodeToken = localStorage.getItem("verification-code");

  const bytes = CryptoJS.AES.decrypt(
    hashEmail === null ? "" : hashEmail,
    "RAKTHERM@2023"
  );
  const email = bytes.toString(CryptoJS.enc.Utf8);

  const [deleteUserByEmail] = useDeleteUserByEmailMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (emailRoute !== hashRoute) {
      localStorage.removeItem("email-token");
      localStorage.removeItem("verification-token");
      localStorage.removeItem("verification-code");
      deleteUserByEmail({ email: email });
      navigate(`/account`);
    }
  }, [hashRoute, hashEmail]);

  useEffect(() => {
    setErrMsg("");
  }, [verificationCode]);

  useEffect(() => {
    errRef.current.focus();
  }, []);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    if (verificationCode !== verificationCodeToken) {
      setErrMsg("Invalid verification code");
    } else {
      setErrMsg("you're good to go");
    }
  };

  useBeforeunload((event) => {
    if (verificationCode === "") {
      event.preventDefault();
      window.confirm("Press a button!\nEither OK or Cancel.");
      localStorage.removeItem("email-token");
      localStorage.removeItem("verification-token");
      deleteUserByEmail({ email: email });
      navigate(`/account`);
    }
  });
  return (
    <>
      {/* <Beforeunload onBeforeunload={() => "You’ll lose your data!"} /> */}
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
                    <WidgetDetails
                      style={{ marginBottom: "5px", textAlign: "initial" }}
                    >
                      Kindly check the email for your verification code.
                    </WidgetDetails>
                    <WidgetDetails
                      style={{ marginBottom: "5px", textAlign: "initial" }}
                    >
                      Verification code is sent to:
                      <span style={{ color: "#0645AD" }}> {email}</span>
                    </WidgetDetails>
                    <WidgetDetails
                      style={{
                        fontWeight: "400",
                        fontStyle: "italic",
                        marginBottom: "15px",
                      }}
                    >
                      Kindly check your Inbox or Spam/Junk.
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
