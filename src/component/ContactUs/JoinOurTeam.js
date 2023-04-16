import React from "react";
import {
  WidgetDetails,
  Title,
  InputField,
  TextArea,
  Button,
  Captcha,
  CaptchaContainer,
  RefreshButton,
  RefreshIcon,
  WidgetSubTitle,
  WidgetTitle
} from "../../assets/styled/ContactStyle";

const JoinOurTeam = () => {
  return (
    <>
      <Title>CAREER OPPORTUNITIES</Title>

      <WidgetDetails>
        Our group defines diversity as difference makes each of us unique
        individuals. Our ability to attract, retain, and employ diverse talents
        leads us to enhance innovation and creativity in our products and
        services. As such, we believe that our commitment to comprehensive
        hiring of highly talented experts and promotion is imperative.
      </WidgetDetails>
      <WidgetDetails>
        Our talent management comprises of attraction, retention, engagement,
        and professional development by cultivating and deploying employees’
        skills. We can acquire outstanding performance in accelerating growth
        and competitiveness in the market through maximized retention of
        excellent performing employees. Thus, we offer learning opportunities in
        every career stage for our individual contributors, managers, and
        directors with courses designed to leverage employees’ existing
        strengths while targeting developmental needs.
      </WidgetDetails>

      <WidgetSubTitle style={{ textTransform: "none", fontSize: "14px" }}>
        We are inviting all talented, enthusiastic, highly competitive
        individuals with exquisite ideas and capabilities to make a mark of
        difference!
      </WidgetSubTitle>

      <WidgetDetails>
        Send your CV at: info@raktherm.com and sales@raktherm.com
      </WidgetDetails>

      <div class="item" style={{ marginBottom: "30px" }}>
        <div class="block-1">
          <div class="block-info">
            <div class="block">
              <p class="link">Reference No:</p>
              <a href="#" class="link date">
                038912
              </a>
            </div>
          </div>
          <div class="block-content">
            <a href="#" class="title">
              Job Title: SALES ENGINEER
            </a>
            <div class="description">
              <p class="text">
                <strong>Job Description:</strong>Sales Engineer, with 5 years
                experience
              </p>
            </div>

            <Button style={{ marginBottom: "0px", width: "15%" }}>
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      <div class="item" style={{ marginBottom: "30px" }}>
        <div class="block-1">
          <div class="block-info">
            <div class="block">
              <p class="link">Reference No:</p>
              <a href="#" class="link date">
                038912
              </a>
            </div>
          </div>
          <div class="block-content">
            <a href="#" class="title">
              Job Title: INDUSTRIAL ENGINEER{" "}
            </a>
            <div class="description">
              <p class="text">
                <strong>Job Description:</strong>Industrial Engineer, with 5
                years experience
              </p>
            </div>

            <Button style={{ marginBottom: "0px", width: "15%" }}>
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      <WidgetTitle>ONLINE APPLICATION</WidgetTitle>

      <WidgetDetails>
        We are consistently searching for dynamic and enthusiastic personnel who
        have the patience to work with diligence all the time; someone who have
        the commitment to reflect excellence in everything he/she does; and
        someone who dreams to have a solid job.
      </WidgetDetails>

      <WidgetDetails>
        If you are the one we are looking for, fill in the details below and
        leave your CV with us.We will get back to you if your details match our
        requirements.
      </WidgetDetails>

      <InputField placeholder="Name" />
      <InputField placeholder="Education" />
      <InputField placeholder="Interest Field" />
      <InputField placeholder="Date of Birth" />
      <InputField placeholder="Nationality" />
      <InputField placeholder="Language Known" />
      <InputField placeholder="Previous Experience (if any)" />
      <InputField placeholder="Contact" />
      <InputField type="file" />
      <CaptchaContainer>
        <Captcha>44A7xb</Captcha>
        <RefreshButton>
          <RefreshIcon />
        </RefreshButton>
      </CaptchaContainer>
      <InputField placeholder="Enter Captcha Here" />
      <Button>Submit</Button>
    </>
  );
};

export default JoinOurTeam;
