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

const PlumberChallenges = () => {
  return (
    <>
      <TitleWrapper>
        <LineTitle>|</LineTitle>
        <Title>CHALLENGES</Title>
      </TitleWrapper>

      <hr></hr>

      <Content>
        <WidgetDetails>
          These challenges you will need finish it to earn points and every
          challenges you completed, You will unlock new challenges accordingly
          where you can gain more points and redeem rewards, the more points
          you've earned, the best reward you can redeem.
        </WidgetDetails>

        <WidgetDetails>
          Cause here in RAKtherm we are not just a Manufacturer, or business we
          are community that shares and celebrates successes and support your
          interaction with your fellow plumbers and personal plumbing talents,
          skills and achievements.
        </WidgetDetails>
      </Content>

      <hr></hr>

    </>
  );
};

export default PlumberChallenges;
