import React, { useState } from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import ReCAPTCHA from "react-google-recaptcha";

const Container = styled.div`
  width: 1270px;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  background-color: #1a5b39;
  padding: 40px 0px;
`;

const Panel = styled.div`
  width: 25%;
  padding: 15px;
`;

const TitleWidget = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: white;
`;

const WidgetDetails = styled.div`
text-align: justify;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #ffffffb3;
`;

const Socials = styled.div`
  margin-top: 76px;
  align-items: center;
  justify-content: flex-end;
`;

const SocialContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WidgetImage = styled.img``;

const Video = styled.iframe``;

const TextField = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  padding: 0 11px 0px 15px;
  resize: none;
  color: white;
  border: none;
  border: 1px solid #008053;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none !important;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #ffffffb3;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  padding: 5px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  color: white;
  background-color: #008053;
  text-transform: uppercase;
  margin-bottom: 50px;
  border: 2px solid #008053;

  :hover {
    color: #008053;
    background-color: white;
    border: 2px solid #008053;
  }
`;

const SubFooter = () => {
  const [facebookColor, setFacebookColor] = useState("#FFFFFF1A");
  const [instagramColor, setInstagramColor] = useState("#FFFFFF1A");
  const [youtubeColor, setYoutubeColor] = useState("#FFFFFF1A");
  const [linkedInColor, setLinkedInColor] = useState("#FFFFFF1A");
  const [twitterColor, setTwitterColor] = useState("#FFFFFF1A");

  return (
    <Wrapper>
      <Container className="containers" style={{ display: "flex" }}>
        <Panel>
          <TitleWidget>ABOUT US</TitleWidget>
          <WidgetDetails style={{ marginBottom: "30px" }}>
            The Hashim Industry stays ahead of its competition by the sheer dint
            of its innovation.
          </WidgetDetails>

          <WidgetDetails>
            <strong>Address:</strong> P.O.Box 30739, RAK, UAE
          </WidgetDetails>
          <WidgetDetails>
            <strong>Tel:</strong> +971 7 2447124/ 5/ 6/ 8
          </WidgetDetails>
          <WidgetDetails>
            <strong>Email:</strong> sales@raktherm.com,
          </WidgetDetails>
          <WidgetDetails>customerservices@raktherm.com</WidgetDetails>

          <Socials>
            <SocialContainer>
              <SocialIcon
                onMouseEnter={() => setFacebookColor("#3b5998")}
                onMouseLeave={() => setFacebookColor("#FFFFFF1A")}
                bgColor={facebookColor}
                fgColor="white"
                url="https://www.facebook.com/rakthermultimatepipingsolutions/?ref=bookmarks"
              />
              <SocialIcon
                onMouseEnter={() => setTwitterColor("")}
                onMouseLeave={() => setTwitterColor("#FFFFFF1A")}
                bgColor={twitterColor}
                fgColor="white"
                url="https://twitter.com/Raktherm_global"
              />
              <SocialIcon
                onMouseEnter={() => setYoutubeColor("")}
                onMouseLeave={() => setYoutubeColor("#FFFFFF1A")}
                bgColor={youtubeColor}
                fgColor="white"
                url="https://www.youtube.com/channel/UCq1NXWMwragdLRVU3g_m2Yw"
              />
              <SocialIcon
                onMouseEnter={() => setInstagramColor("#895A4D")}
                onMouseLeave={() => setInstagramColor("#FFFFFF1A")}
                bgColor={instagramColor}
                fgColor="white"
                url="https://www.instagram.com/raktherm_global/"
              />
              <SocialIcon
                onMouseEnter={() => setLinkedInColor("")}
                onMouseLeave={() => setLinkedInColor("#FFFFFF1A")}
                bgColor={linkedInColor}
                fgColor="white"
                url="https://www.linkedin.com/in/raktherm-global-62b44314a/"
              />
            </SocialContainer>
          </Socials>
        </Panel>
        <Panel>
          <TitleWidget>raktherm global</TitleWidget>
          <WidgetDetails style={{ marginBottom: "30px" }}>
            The Hashim Industry stays ahead of its competition by the sheer dint
            of its innovation. RAKtherm has formidable market presence within
            global operational hubs for extensive distribution in several
            countries across the regions of GCC, North & South Africa, South &
            East Asia, and Europe.
          </WidgetDetails>

          <WidgetImage
            src="https://www.raktherm.com/assets/images/map.jpg"
            alt="map"
          />
        </Panel>
        <Panel>
          <TitleWidget style={{ marginBottom: "35px" }}>
            ultimate solutions
          </TitleWidget>
          <Video
            width="100%"
            height="150"
            src="https://www.youtube-nocookie.com/embed/CEkyZPRgrRs?rel=0&amp;showinfo=0"
            frameborder="0"
            allowfullscreen=""
          />
        </Panel>
        <Panel>
          <TitleWidget>email newsletter</TitleWidget>
          <WidgetDetails style={{ paddingBottom: "20px" }}>
            Please sign up for Our Newsletter. Subscribe us to receive news in
            your inbox.
          </WidgetDetails>

          <TextField placeholder="Full Name"></TextField>
          <TextField placeholder="Email Address"></TextField>
          <div
            className="captcha"
            style={{
              transform: "scale(.95)",
              transformOrigin: "0 0",
              marginBottom: "25px",
            }}
          >
            <ReCAPTCHA
              sitekey="6Lf5G3QlAAAAAJYR-SKAlgOMKmZTzhipc-KsCF2a"
              size="normal"
            />
          </div>

          <Button>SUBMIT</Button>
        </Panel>
      </Container>
    </Wrapper>
  );
};

export default SubFooter;
