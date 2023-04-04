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

const SustainedDevelopment = () => {
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
              <WidgetLink to={`/about-us/corporate-strategy`}>
                Corporate Strategy <ArrowRight />
              </WidgetLink>
              <WidgetLink to={`/about-us/chairmans-message`}>
                Chairman's Message <ArrowRight />
              </WidgetLink>
              <WidgetLink
                to={`/about-us/sustained-development`}
                className="active-link"
              >
                Sustained Development <ArrowRight style={{ opacity: "1" }} />
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
              <Title>Sustained Development</Title>
              <WidgetDetails>
                <strong>Sustained growth</strong> is one of the driving forces
                of RAKtherm to continuously strive harder. We have established
                our name with exceptional reputation in the field of piping
                industry across the world in terms of quality, solution, and
                services. Our fundamental motivation is the zest to create
                valuable products and services that will build today and shape
                the future. We prioritize both creating a difference and getting
                things done.
              </WidgetDetails>
              <WidgetDetails>
                RAKtherm is driven by intensified competitive spirit within the
                market place and executes this attitude in our process as we
                envision to manufacture products that will be beneficial both to
                its consumers and stockiest worldwide. Our success depends on a
                thorough understanding of our customers and employees. We choose
                to make decisions that are perfect balance between short term
                and long term goals. And we are thankful for that, thus we have
                produced products and services that will encompass the present
                and will remain in the future.
              </WidgetDetails>
            </RightPanel>
          </Wrapper>
        </Container>
      </Content>
    </>
  );
};

export default SustainedDevelopment;
