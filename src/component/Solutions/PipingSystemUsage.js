import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { ImCheckmark } from "react-icons/im";
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

  :hover ${ArrowRight} {
    opacity: 1;
  }
`;

const WidgetDetails = styled.div`
  font-size: 14px;
  margin-bottom: 25px;
  color: #61728d;
`;

const Details = styled.div`
  width: 98%;
  display: flex;
  font-size: 14px;
  color: #61728d;
  margin-left: 10px;
  margin-bottom: 5px;
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

const ChecklistContainer = styled.div`
  display: flex;
`;

const Check = styled(ImCheckmark)`
  width: 2%;
  color: #b7c6cf;
  margin-top: 2px;
  font-size: 14px;
  font-weight: 900;
`;

const PipingSystemsUsage = () => {
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
              <Title>PIPING SYSTEMS USAGE</Title>
              <WidgetDetails>
                A versatile and comprehensive delivery system is used in the
                transfer of high pressure warm/cold water and other fluids in
                all modern residential, commercial, and industrial applications.
                The creative solutions provided by RAKtherm in its product base
                renders it a leader in the industry.
              </WidgetDetails>
              <WidgetSubTitle>PPR PIPING SYSTEMS</WidgetSubTitle>

              <ChecklistContainer>
                <Check />
                <Details>
                  Potable installations inside houses, high rise buildings,
                  hotels, hospitals and virtually all types of commercial and
                  residential buildings
                </Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>
                  Factories with high-pressure water and compressed air
                  circuits.
                </Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>Rain drainage and collection systems.</Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>
                  Indoor and outdoor swimming pools, gyms and their water
                  filtration circuits and water installations.
                </Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>
                  Piping networks for all types of irrigation and agricultural
                  applications and Pressurized Piping Networks.
                </Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>
                  Piping networks for all types for industrial applications like
                  the delivery of aggressive fluids containing acidic, alkaline,
                  reactive and corrosive chemicals.
                </Details>
              </ChecklistContainer>

              <WidgetSubTitle style={{marginTop: "10px"}}>INCLUDING APPLICATIONS FOR:</WidgetSubTitle>

              <ChecklistContainer>
                <Check />
                <Details>
                  Connections from municipality water supply to the tanks and
                  reservoirs.
                </Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>
                  Boilers and radiator connections and networks.
                </Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>
                  Risers for water delivery, ventilation, and pressure relief.
                </Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>
                  Water transport from pumps to upper tanks and distribution
                  points.
                </Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>
                  Connections through meters, and distributor manifolds.
                </Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>
                  Distributions inside flats, apartments, houses etc.
                </Details>
              </ChecklistContainer>

              <ChecklistContainer>
                <Check />
                <Details>
                  Under floor network distribution and under floor heating
                  networks.
                </Details>
              </ChecklistContainer>
            </RightPanel>
          </Wrapper>
        </Container>
      </Content>
    </>
  );
};

export default PipingSystemsUsage;
