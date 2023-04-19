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

const PlumberRewards = () => {
  return (
    <>
      <TitleWrapper>
        <LineTitle>|</LineTitle>
        <Title>REWARDS</Title>
      </TitleWrapper>

      <hr></hr>

      <Content>
        <WidgetDetails>
          Rewards use to redeem RAKtherm merchandise below, To earn more points
          you need to accomplish more challenges to earn more points and redeem
          RAKtherm Merchandise below.
        </WidgetDetails>

        <WidgetDetails>
          Cause here in RAKtherm we are not just a Manufacturer, or business we
          are community that shares and celebrates successes and support your
          personal plumbing talents, skills and achievements. Here you are not
          just interacting or engaging your fellow plumbers you can also receive
          RAKtherm Merchandise by completing our simple challenges.
        </WidgetDetails>
      </Content>

      <hr></hr>

    </>
  );
};

export default PlumberRewards;
