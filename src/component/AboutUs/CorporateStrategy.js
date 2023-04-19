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

const CorporateStrategy = () => {
  return (
    <>
      <Title>Corporate Strategy</Title>
      <WidgetDetails>
        Our corporate strategy empowers us to achieve a unified goal to sustain
        superior product performance by overcoming business challenges,
        understanding the industry trends, and working together for a
        well-defined corporate principle. By means of pursuing growth,
        delivering innovation, and driving for excellence because we exist to be
        a leader in everything we do.
      </WidgetDetails>
      <Title>PRODUCT INTEGRITY OF RAKTHERM</Title>
      <WidgetDetails>
        RAKtherm is all about ultimate piping solutions! a brand that speaks
        about the product. Over the years, we are able to preserve the quality
        of RAKtherm, achieving and maintaining excellent performance in the
        global market. We are committed to provide engineering piping technology
        with superior product performance for intensified efficiency as we value
        product integrity. This strategy leads us to organizational growth and
        limitless opportunities.
      </WidgetDetails>
      <Title>TECHNOLOGICAL ADVANCEMENT THROUGH INNOVATION</Title>
      <WidgetDetails>
        We are a highly competitive organization established to overcome
        business challenges through understanding the industry trends and
        technological changes. Innovation allows us to move ahead for this is
        our key to success. We focus on providing quality products and simply
        upgrade them to a level that maintains its’ competitiveness and
        leadership in the market. Innovation is essential in our organization’s
        stability.
      </WidgetDetails>
      <Title>ENVIRONMENTAL SUSTAINABILITY</Title>
      <WidgetDetails>
        We have a significant role in protecting and saving the environment. The
        main challenges in the plastic industries are the plastic wastes of
        which we are consciously and positively resolving the issue with
        multi-phased approach solutions. We set high standards in our operating
        systems in the area of environmental responsibility, which complies with
        regulations that will reduce environmental impacts. In doing so, we take
        the responsibility in protecting and saving our eco-system and preserve
        it for future generations.
      </WidgetDetails>
    </>
  );
};

export default CorporateStrategy;
