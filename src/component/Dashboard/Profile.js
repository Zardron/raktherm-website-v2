import React from "react";
import styled from "styled-components";

const WidgetDetails = styled.div`
  text-align: justify;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 25px;
  color: #61728d;
`;

const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  margin: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #3a4d6a;
`;

const Profile = () => {
  return (
    <>
      <Title>Raktherm at a glance</Title>
      <WidgetDetails>
        RAKtherm- Gulf Plastic and Converting Industries is under the
        flourishing arm of an illustrious group Hashim Industry, which was
        established 1963. We are one of the region’s renowned business
        conglomerates. RAKtherm is the flagship division and pioneer of
        integrated PPR, PEX, anti-UV, Reinforced, and DVW piping systems.
      </WidgetDetails>
      <WidgetDetails>
        When foreign investments flourished in the region, a growing demand for
        construction supplies arise. The group immediately responded to the
        growing requirements of the industry and expands its product portfolio
        to include RAKtherm piping systems in order to sustain the demand of the
        construction sector.
      </WidgetDetails>
      <WidgetDetails>
        Established over decades back, with a manufacturing facility and
        corporate sales headquarter in the United Arab Emirates; RAKtherm is the
        first and largest PPR and PEX systems manufacturer in the Middle East.
      </WidgetDetails>
      <Title>OUR LEADERSHIP</Title>
      <WidgetDetails>
        “The most eminent high-end global manufacturer of piping systems
        technology”
      </WidgetDetails>
      <WidgetDetails>
        Throughout the years, RAKtherm is known for its world-class brand
        delivering effective and efficient piping systems. With continuous
        pursuance in finding solutions to the major challenges in the MEP
        industry, we established ourselves highly recognized in the piping
        industry. Our understanding to the technological quest in plastic piping
        systems enables us to address these demanding challenges.{" "}
      </WidgetDetails>
      <WidgetDetails>
        We are committed to making a real difference in providing
        hi-technological piping innovations that are breakthrough in the
        industry.
      </WidgetDetails>
    </>
  );
};

export default Profile;
