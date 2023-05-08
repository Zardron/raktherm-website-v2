import { useState, useEffect } from "react";
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
  CaptchaContainer,
  Captcha,
  RefreshButton,
  RefreshIcon,
  Select,
} from "../assets/styled/AccountStyle";
import TopBar from "../component/TopBar";
import Navbar from "../component/Navbar";
import SubFooter from "../component/SubFooter";
import Footer from "../component/Footer";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { COUNTRIES } from "../assets/data/Countries";
import { useAddNewUserMutation } from "../redux/slice/api/usersApiSlice";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  console.log(country);

  useEffect(() => {
    if (isSuccess) {
      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
      setPosition("");
      setCompanyName("");
      setCountry("");
      setPhoneNumber("");
      navigate("/dashboard");
    }
  }, [isSuccess, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addNewUser({
      email,
      password,
      firstname,
      lastname,
      position,
      companyName,
      country,
      phoneNumber,
    });
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
                    <BannerTitleLine>|</BannerTitleLine>LOGIN & REGISTER
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
              <ActiveLink>My RAKtherm</ActiveLink>
            </HomeLink>
          </Content>
        </Container>

        <WidgetContent>
          <Container>
            <TitleWrapper>
              <LineTitle>|</LineTitle>
              <Title>LOGIN & REGISTER</Title>
            </TitleWrapper>
            <Div>
              <ItalicText>
                Interact With Fellow Technician, And See If We Were Able To Help
                You Through Our Training With RAKtherm Global Academy.
              </ItalicText>
            </Div>

            <AccountWrapper>
              <Panel>
                <div class="blog-detail-wrapper">
                  <div class="comment-respond">
                    <h3 class="title">Login</h3>
                    <div class="contact-form-2"></div>
                    <form>
                      <InputField placeholder="Email" />
                      <InputField placeholder="Password" />

                      <Button
                        style={{
                          width: "15%",
                          marginRight: "10px",
                          marginBottom: "20px",
                        }}
                      >
                        Login
                      </Button>
                      <a href="index.php?module=forgotpass">Forget Password</a>
                    </form>
                  </div>
                </div>
              </Panel>

              <Panel>
                <div class="blog-detail-wrapper">
                  <div class="comment-respond">
                    <h3 class="title">Register</h3>
                    <p style={{ color: "red", paddingBottom: "15px" }}>
                      {error?.data?.message}
                    </p>
                    <div class="contact-form-2"></div>
                    <form onSubmit={handleSubmit}>
                      <InputField
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <InputField
                        placeholder="Password*"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputField
                        placeholder="Confirm Password*"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputField
                        placeholder="First Name*"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                      <InputField
                        placeholder="Last Name*"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                      <InputField
                        placeholder="Job Position*"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                      />
                      <InputField
                        placeholder="Company Name*"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                      <Select
                        placeholder="Select Country*"
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        {COUNTRIES.map((data) => (
                          <>
                            <option value={data.name}>{data.name}</option>
                          </>
                        ))}
                      </Select>
                      <InputField
                        placeholder="Phone Number*"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <CaptchaContainer>
                        <Captcha style={{ width: "20%" }}>44A7xb</Captcha>
                        <RefreshButton>
                          <RefreshIcon />
                        </RefreshButton>
                      </CaptchaContainer>
                      <InputField placeholder="Enter Captcha Here" />
                      <Button style={{ width: "20%", marginBottom: "20px" }}>
                        Register
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
  margin: 50px 0px;
`;

const Panel = styled.div`
  flex: 1;
  padding: 20px;
`;

export default Account;
