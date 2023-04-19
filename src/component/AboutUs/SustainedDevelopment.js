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

const SustainedDevelopment = () => {
  return (
    <>
      <Title>Sustained Development</Title>
      <WidgetDetails>
        <strong>Sustained growth</strong> is one of the driving forces of
        RAKtherm to continuously strive harder. We have established our name
        with exceptional reputation in the field of piping industry across the
        world in terms of quality, solution, and services. Our fundamental
        motivation is the zest to create valuable products and services that
        will build today and shape the future. We prioritize both creating a
        difference and getting things done.
      </WidgetDetails>
      <WidgetDetails>
        RAKtherm is driven by intensified competitive spirit within the market
        place and executes this attitude in our process as we envision to
        manufacture products that will be beneficial both to its consumers and
        stockiest worldwide. Our success depends on a thorough understanding of
        our customers and employees. We choose to make decisions that are
        perfect balance between short term and long term goals. And we are
        thankful for that, thus we have produced products and services that will
        encompass the present and will remain in the future.
      </WidgetDetails>
    </>
  );
};

export default SustainedDevelopment;
