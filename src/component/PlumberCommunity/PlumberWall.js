import React from "react";
import styled from "styled-components";
import { WidgetDetails } from "../../assets/styled/PlumberCommunity";

const TitleWrapper = styled.div`
  display: flex;
  padding-bottom: 25px;
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

const PlumberWall = () => {
  return (
    <>
      <TitleWrapper>
        <LineTitle>|</LineTitle>
        <Title>COMMUNITY WALL</Title>
      </TitleWrapper>

      <hr></hr>

      <Content>
        <WidgetDetails>
          We believe that your talents, skills and achievements is shareable to
          your fellow plumbers, we made your a plumber community wall to share
          all you've got.{" "}
        </WidgetDetails>

        <WidgetDetails>
          Interact with fellow plumbers, And see if we were able to help you
          through by commenting or reacting your fellow plumber posts in our
          plumber community wall.
        </WidgetDetails>

        <WidgetDetails>
          Cause here in RAKtherm we are not just a Manufacturer, or business we
          are community that shares and celebrates successes and support your
          personal plumbing talents, skills and achievements.
        </WidgetDetails>
      </Content>

      <hr></hr>

    </>
  );
};

export default PlumberWall;
