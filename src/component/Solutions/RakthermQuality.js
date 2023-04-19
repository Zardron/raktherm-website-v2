import React from "react";
import styled from "styled-components";
import { ImFilePdf } from "react-icons/im";


const WidgetTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #3a4d6a;
`;

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
  margin-bottom: 14px;
`;

const PDF = styled(ImFilePdf)`
  color: #ff3c00;
  font-size: 18px;
  margin-right: 20px;
`;

const PDFButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 48px;
  height: 50px;
  padding: 0 30px;
  text-align: left;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: #61728d;
  border: 1px solid #d3dbe4;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  cursor: pointer;

  :hover {
    color: #008053;
    border-color: #ffffff;
    background-color: #ffffff;
    box-shadow: 3px 5px 15px 0 rgba(0, 0, 0, 0.15);

    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
`;

const RakthermQuality = () => {
  return (
    <>
      <Title>RAKTHERM QUALITY</Title>
      <WidgetDetails>
        Our quality management system is defined to ensure consistent
        high-quality production to intensify product integrity. We have
        developed a successful management principles based on the concept of
        premium quality that comprise of planning, quality control, quality
        assurance, and quality improvement. This principle consists of
        individual employee involvement in the process that meets exactly
        engineering requirements to withstand technical competitiveness in
        global market.
      </WidgetDetails>

      <WidgetSubTitle>QUALITY GUARANTEE</WidgetSubTitle>
      <WidgetDetails>
        Enjoy the benefit of <strong>15-YEARS WARRANTY</strong> for all RAKtherm
        piping network systems starting from the date of your purchase. You may
        ask your local representatives for more details.
      </WidgetDetails>

      <WidgetDetails>
        For more details, click the link below to download our warranty
        certificate form.
      </WidgetDetails>

      <PDFButton>
        <PDF />
        RAKTHERM ARABIC WARRANTY
      </PDFButton>
      <PDFButton>
        <PDF />
        RAKTHERM ENGLISH WARRANTY
      </PDFButton>
      <PDFButton>
        <PDF />
        RAKTHERM FRENCH WARRANTY
      </PDFButton>

      <WidgetTitle>INTELLIGENT QUALITY MANAGEMENT SYSTEMS:</WidgetTitle>
      <WidgetSubTitle>PLANNING</WidgetSubTitle>
      <WidgetDetails>
        We carefully plan the manufacturing process of RAKtherm pipes by
        defining the outline on how it will be fabricated. Planning is executed
        through research, conducting assessments, and deciding the desirable
        outcome based on consumers’ and engineers’ perspectives.
      </WidgetDetails>

      <WidgetSubTitle>COMPREHENSIVE QUALITY CONTROL SYSTEMS</WidgetSubTitle>
      <WidgetDetails>
        With continuous globalization of the business, we are implementing a
        rigid quality control system that covers the entire entity of all
        aspects associated in the production which signifies complete overview
        and re-evaluation of product specifications. A comprehensive quality
        system begins from designing the required specifications, sourcing out
        meticulously the finest quality raw materials that will guarantee
        outstanding product output, appropriate packing, proper storage, and
        shipping to customers.
      </WidgetDetails>

      <WidgetSubTitle>
        QUALITY ASSURANCE USING STATE OF THE ART LABORATORY
      </WidgetSubTitle>
      <WidgetDetails>
        We never comprise RAKtherm’s quality ever since, thus we are constantly
        maintaining the quality we are known for. Our products and services are
        progressively enhanced through strict compliance with effective quality
        assurance system using state of the art laboratory. We ensure that
        quality requirements are being fulfilled in order to provide
        suitability, effectiveness, and efficiency of our products.
      </WidgetDetails>

      <WidgetSubTitle>CONSISTENT QUALITY IMPROVEMENT</WidgetSubTitle>
      <WidgetDetails>
        In today’s fast-paced technological advancements, we are geared towards
        a better and more effective solution to adapt accordingly by developing
        our products through innovation. RAKtherm has survived the global market
        competition throughout the years by creating more effective processes
        with implementation of new ideas for product improvement and
        enhancement. perspectives.
      </WidgetDetails>
    </>
  );
};

export default RakthermQuality;
