import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { SOLUTIONS } from "../../assets/data/WidgetData";

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
              <Title>ULTIMATE PIPING SOLUTIONS</Title>
              <WidgetSubTitle>
                WHY RAKTHERM? BECAUSE WE MANUFACTURE HIGH QUALITY PIPING SYSTEMS
                TO SUSTAIN AND SUPPORT THE PIPING INDUSTRY GLOBALLY BASE ON
                VALUE AND EXCELLENCE.
              </WidgetSubTitle>
              <WidgetDetails>
                RAKtherm Ultimate Piping Solutions has gained the depth
                understanding of piping systems to distribute water in the most
                effective way. With 50 years of expertise we have mastered the
                piping network analysis through comprehensive research and
                development to bring modern approach through innovation. Being
                the pioneer and ultimate provider of piping solutions, we are
                committed to deliver the highest quality of value added products
                and services.
              </WidgetDetails>
              <WidgetDetails>
                We grow and cultivated with technological advancement, RAKtherm
                pipes were developed and manufactured based on expertise and
                experience. Produced under German technology, undergoes through
                testing that is conformed and certified for global distribution
                and utilization. As for this, we have build up a strong market
                foundation across GCC, North and South Africa, South and East
                Asia, and Europe.
              </WidgetDetails>
            </RightPanel>
          </Wrapper>
        </Container>
      </Content>
    </>
  );
};

export default UltimateSolutions;
