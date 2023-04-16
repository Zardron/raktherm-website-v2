import React from "react";
import styled from "styled-components";

const WidgetDetails = styled.div`
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

const WidgetSubTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 11.62px;
  font-weight: 700;
  line-height: 18px;
  margin: 0;
  text-transform: uppercase;
  color: #3a4d6a;
  margin-bottom: 25px;
`;

const UltimateSolutions = () => {
  return (
    <>
      <Title>ULTIMATE PIPING SOLUTIONS</Title>
      <WidgetSubTitle>
        WHY RAKTHERM? BECAUSE WE MANUFACTURE HIGH QUALITY PIPING SYSTEMS TO
        SUSTAIN AND SUPPORT THE PIPING INDUSTRY GLOBALLY BASE ON VALUE AND
        EXCELLENCE.
      </WidgetSubTitle>
      <WidgetDetails>
        RAKtherm Ultimate Piping Solutions has gained the depth understanding of
        piping systems to distribute water in the most effective way. With 50
        years of expertise we have mastered the piping network analysis through
        comprehensive research and development to bring modern approach through
        innovation. Being the pioneer and ultimate provider of piping solutions,
        we are committed to deliver the highest quality of value added products
        and services.
      </WidgetDetails>
      <WidgetDetails>
        We grow and cultivated with technological advancement, RAKtherm pipes
        were developed and manufactured based on expertise and experience.
        Produced under German technology, undergoes through testing that is
        conformed and certified for global distribution and utilization. As for
        this, we have build up a strong market foundation across GCC, North and
        South Africa, South and East Asia, and Europe.
      </WidgetDetails>
    </>
  );
};

export default UltimateSolutions;
