import React from "react";
import {
  Button,
  Captcha,
  CaptchaContainer,
  Container,
  Download,
  InputField,
  RefreshButton,
  RefreshIcon,
  TextArea,
} from "../assets/styled/RakthermWorldwide";
import styled from "styled-components";

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Panel = styled.div`
  flex: 1;
  padding: 50px 20px 0px 20px;
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 55px;
  font-weight: 700;
  line-height: 50px;
  margin: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
`;

const SubTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 23px;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
  color: #ffffff;
  text-align: center;
`;

const Form = styled.div`
  margin-top: 25px;
`;

const LocalContainer = styled.div`
  margin-top: 70px;
  background-color: white;
`;

const DownloadFooter = () => {
  return (
    <>
      <Download>
        <Container>
          <WrapperContainer>
            <Panel>
              <Title>REGISTER TO DOWNLOAD</Title>
              <SubTitle>Our E- Catalogue And Resources</SubTitle>
              <Form>
                <InputField placeholder="Name" />
                <InputField placeholder="Email Address" />
                <InputField placeholder="Phone No" />
                <InputField placeholder="City" />
                <InputField placeholder="Company" />
                <TextArea placeholder="Address" rows={3} />
                <CaptchaContainer>
                  <Captcha style={{ width: "15%" }}>44A7xb</Captcha>
                  <RefreshButton>
                    <RefreshIcon />
                  </RefreshButton>
                </CaptchaContainer>
                <InputField placeholder="Enter Captcha Here" />
                <Button style={{ width: "15%" }}>Submit</Button>
              </Form>
            </Panel>
            <Panel>
              <Title>GET LOCAL SUPPORT</Title>
              <LocalContainer>
                <div class="item">
                  <div class="block-1">
                    <div class="block-image" style={{height: "370px"}}>
                      <img
                        src="https://www.raktherm.com/assets/images/post/image-50.jpg"
                        alt=""
                        class="img-full"
                      />
                    </div>
                    <div class="block-content">
                      <span
                        class="title"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Find wholesaler
                      </span>
                      <div class="description">
                        <p class="text">
                          “Eminent as the high-end global manufacturer of piping
                          systems technology”
                        </p>
                      </div>
                      <a href="#" class="readmore">
                        <span class="text">read more</span>
                        <i class="icons fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </LocalContainer>
            </Panel>
          </WrapperContainer>
        </Container>
      </Download>
    </>
  );
};

export default DownloadFooter;
