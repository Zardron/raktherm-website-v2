import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";

const Container = styled.div`
  width: 1270px;
  margin-right: auto;
  margin-left: auto;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
`;

const LeftPanel = styled.div`
  width: 25%;
  padding-right: 10px;
`;

const RightPanel = styled.div`
  padding-left: 10px;
  width: 75%;
`;

const Content = styled.div`
  background-color: white;
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
  webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;

  :hover {
    color: #008053;
    box-shadow: -2px 2px 0 0 #008053;
    padding: 10px 0px 10px 20px;
    webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  :hover ${ArrowRight} {
    opacity: 1;
  }
`;

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

const QuickLink = styled.div`
  padding-top: 30px;
`;

const CorporateStrategy = () => {
  return (
    <>
      <Content>
        <Container>
          <Wrapper>
            <LeftPanel>
              <WidgetTitle>About us</WidgetTitle>
              <WidgetLink to={`/about-us/a-glance`}>
                A Glance <ArrowRight />
              </WidgetLink>
              <WidgetLink
                to={`/about-us/corporate-strategy`}
                className="active-link"
              >
                Corporate Strategy <ArrowRight style={{ opacity: "1" }} />
              </WidgetLink>
              <WidgetLink to={`/about-us/chairmans-message`}>
                Chairman's Message <ArrowRight />
              </WidgetLink>
              <WidgetLink to={`/about-us/sustained-development`}>
                Sustained Development <ArrowRight />
              </WidgetLink>

              <QuickLink>
                <WidgetTitle>Quick link</WidgetTitle>
                <WidgetLink>
                  Join MyRAKtherm <ArrowRight />
                </WidgetLink>
                <WidgetLink>
                  Get Local Support <ArrowRight />
                </WidgetLink>
                <WidgetLink>
                  Ultimate Solutions <ArrowRight />
                </WidgetLink>
                <WidgetLink>
                  Download Brochures <ArrowRight />
                </WidgetLink>
                <WidgetLink>
                  Join RAKtherm Academy <ArrowRight />
                </WidgetLink>
                <WidgetLink>
                  Join Plumber Community <ArrowRight />
                </WidgetLink>
              </QuickLink>
            </LeftPanel>
            <RightPanel>
              <Title>Corporate Strategy</Title>
              <WidgetDetails>
                Our corporate strategy empowers us to achieve a unified goal to
                sustain superior product performance by overcoming business
                challenges, understanding the industry trends, and working
                together for a well-defined corporate principle. By means of
                pursuing growth, delivering innovation, and driving for
                excellence because we exist to be a leader in everything we do.
              </WidgetDetails>
              <Title>PRODUCT INTEGRITY OF RAKTHERM</Title>
              <WidgetDetails>
                RAKtherm is all about ultimate piping solutions! a brand that
                speaks about the product. Over the years, we are able to
                preserve the quality of RAKtherm, achieving and maintaining
                excellent performance in the global market. We are committed to
                provide engineering piping technology with superior product
                performance for intensified efficiency as we value product
                integrity. This strategy leads us to organizational growth and
                limitless opportunities.
              </WidgetDetails>
              <Title>TECHNOLOGICAL ADVANCEMENT THROUGH INNOVATION</Title>
              <WidgetDetails>
                We are a highly competitive organization established to overcome
                business challenges through understanding the industry trends
                and technological changes. Innovation allows us to move ahead
                for this is our key to success. We focus on providing quality
                products and simply upgrade them to a level that maintains its’
                competitiveness and leadership in the market. Innovation is
                essential in our organization’s stability.
              </WidgetDetails>
              <Title>ENVIRONMENTAL SUSTAINABILITY</Title>
              <WidgetDetails>
                We have a significant role in protecting and saving the
                environment. The main challenges in the plastic industries are
                the plastic wastes of which we are consciously and positively
                resolving the issue with multi-phased approach solutions. We set
                high standards in our operating systems in the area of
                environmental responsibility, which complies with regulations
                that will reduce environmental impacts. In doing so, we take the
                responsibility in protecting and saving our eco-system and
                preserve it for future generations.
              </WidgetDetails>
            </RightPanel>
          </Wrapper>
        </Container>
      </Content>
    </>
  );
};

export default CorporateStrategy;
