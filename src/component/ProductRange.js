import React from "react";
import styled from "styled-components";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PRODUCT_RANGE } from "../assets/data/WidgetData";
import { BsDot } from "react-icons/bs";

const ProductRangeContainer = styled.div`
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

const WidgetSublink = styled(Link)`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #61728d;
  border-bottom: 1px solid #f1f6fd;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  margin-left: 40px;

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

const Dot = styled(BsDot)`
  color: #61728d;
  font-size: 30px;
  font-weight: 700;
`;

const ProductRange = (props) => {

  return (
    <ProductRangeContainer>
      <WidgetTitle>Quick link</WidgetTitle>

      {PRODUCT_RANGE.map((data, index) => (
        <>
          <WidgetLink to={`/solutions${data.link}`} key={index}>
            {data.title} <ArrowRight />
          </WidgetLink>
          {data.sublink.map((item) => (
            <WidgetSublink to={`/solutions${item.sublink_link}`}>
              <Dot />
              {item.sublink_title}
            </WidgetSublink>
          ))}
        </>
      ))}
    </ProductRangeContainer>
  );
};

export default ProductRange;
