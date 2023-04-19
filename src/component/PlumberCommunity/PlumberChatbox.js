import React from "react";
import styled from "styled-components";
import { WidgetDetails } from "../../assets/styled/PlumberCommunity";

const TitleWrapper = styled.div`
  padding-bottom: 25px;
  display: flex;
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

const Content = styled.div`
  padding-top: 25px;
`;

const PlumberChatbox = () => {
  return (
    <>
      <TitleWrapper>
        <LineTitle>|</LineTitle>
        <Title>CHATBOX</Title>
      </TitleWrapper>

      <hr></hr>

      <Content>
        <WidgetDetails>
          Interact with fellow plumbers, And see if we were able to help you
          through by joining our public chatbox to communicate with your fellow
          plumbers.
        </WidgetDetails>

        <WidgetDetails>
          Cause here in RAKtherm we are not just a Manufacturer, or business we
          are community that shares and celebrates successes and support your
          interaction with your fellow plumbers to share your plumbing talents,
          skills and achievements.
        </WidgetDetails>
      </Content>

      <hr></hr>

    </>
  );
};

export default PlumberChatbox;
