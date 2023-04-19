import React from "react";
import styled from "styled-components";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { QUICK_LINK } from "../assets/data/WidgetData";

const QuickLinkContainer = styled.div`
  padding-top: 30px;
`;

const WidgetTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #3a4d6a;
`;

const ArrowRight = styled(RiArrowDropRightLine)`
  font-size: 22px;
  float: right;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  opacity: 0;
`;

const WidgetLink = styled(Link)`
font-weight: 500;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #61728d;
  border-bottom: 1px solid #f1f6fd;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;

  :hover {
    color: #008053;
    box-shadow: -2px 2px 0 0 #008053;
    padding: 10px 0px 10px 20px;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;

    ${ArrowRight} {
      opacity: 1 !important;
    }
  }
`;

const QuickLink = () => {
  return (
    <QuickLinkContainer>
      <WidgetTitle>Quick link</WidgetTitle>

      {QUICK_LINK.map((data, index) => (
        <WidgetLink to={data.link} key={index}>
          {data.title} <ArrowRight />
        </WidgetLink>
      ))}
    </QuickLinkContainer>
  );
};

export default QuickLink;
