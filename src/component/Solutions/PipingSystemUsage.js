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

    ${ArrowRight} {
      opacity: 1 !important;
    }
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

const PipingTechnologies = () => {
  return (
    <>
      <Content>
        <Container>
          <Wrapper>
            <LeftPanel>
              <WidgetTitle>Solutions</WidgetTitle>
              {SOLUTIONS.map((item, index) => (
                <>
                  <WidgetLink to={`/solutions/${item.link}`} key={index}>
                    {item.title}
                    <ArrowRight />
                  </WidgetLink>
                </>
              ))}

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
              <Title>Raktherm at a glance</Title>
              <WidgetDetails>
                RAKtherm- Gulf Plastic and Converting Industries is under the
                flourishing arm of an illustrious group Hashim Industry, which
                was established 1963. We are one of the region’s renowned
                business conglomerates. RAKtherm is the flagship division and
                pioneer of integrated PPR, PEX, anti-UV, Reinforced, and DVW
                piping systems.
              </WidgetDetails>
              <WidgetDetails>
                When foreign investments flourished in the region, a growing
                demand for construction supplies arise. The group immediately
                responded to the growing requirements of the industry and
                expands its product portfolio to include RAKtherm piping systems
                in order to sustain the demand of the construction sector.
              </WidgetDetails>
              <WidgetDetails>
                Established over decades back, with a manufacturing facility and
                corporate sales headquarter in the United Arab Emirates;
                RAKtherm is the first and largest PPR and PEX systems
                manufacturer in the Middle East.
              </WidgetDetails>
              <Title>OUR LEADERSHIP</Title>
              <WidgetDetails>
                “The most eminent high-end global manufacturer of piping systems
                technology”
              </WidgetDetails>
              <WidgetDetails>
                Throughout the years, RAKtherm is known for its world-class
                brand delivering effective and efficient piping systems. With
                continuous pursuance in finding solutions to the major
                challenges in the MEP industry, we established ourselves highly
                recognized in the piping industry. Our understanding to the
                technological quest in plastic piping systems enables us to
                address these demanding challenges.{" "}
              </WidgetDetails>
              <WidgetDetails>
                We are committed to making a real difference in providing
                hi-technological piping innovations that are breakthrough in the
                industry.
              </WidgetDetails>
            </RightPanel>
          </Wrapper>
        </Container>
      </Content>
    </>
  );
};

export default PipingTechnologies;
