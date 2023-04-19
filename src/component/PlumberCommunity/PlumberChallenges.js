import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
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

const PlumberChallenges = () => {
  return (
    <TitleWrapper>
      <LineTitle>|</LineTitle>
      <Title>PLUMBER CHALLENGES</Title>
    </TitleWrapper>
  );
};

export default PlumberChallenges;
