import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { ABOUT_US } from "../../assets/data/WidgetData";

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

const ChairmansMessage = () => {
  return (
    <>
      <Content>
        <Container>
          <Wrapper>
            <LeftPanel>
              <WidgetTitle>About us</WidgetTitle>
              {ABOUT_US.map((item, index) => (
                <>
                  <WidgetLink to={`/about-us/${item.link}`} key={index}>
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
              <Title>CHAIRMAN’S MESSAGE</Title>
              <WidgetDetails>
                Plastics have changed the world around us in ways more that we
                can account for, and in the days ahead the role of plastics will
                not diminish. On the contrary we will see increase use of
                plastics in novel applications. We at RAKtherm understand our
                responsibilities and are prepared to meet the challenges and
                demands of the future through breakthrough concepts and
                innovative products.{" "}
              </WidgetDetails>
              <WidgetDetails>
                We invest thousands on man hours in making our organization
                valuable to our partners and consumers. In addition to that, our
                research team is making steady progress in creating better and
                sustainable plastics for the future generation.
              </WidgetDetails>
              <WidgetDetails>
                Since our inception we have grown in strength and presence, and
                today our products gained the trust of 32 different countries.
                We are capable of producing high quality products and our
                capability to deliver added value products. Thanks to our
                dedicated and highly talented employees hired from a diverse
                cultural and social background.
              </WidgetDetails>
              <WidgetDetails>
                We have always worked hard to adhere to the guidelines and
                standards accepted internationally. To that end, we spend a
                significant portion of our revenues in research and development.
                In our R&D facility, while the research and development team is
                concern in making products better, our marketing team is concern
                in informing the clients regarding the latest innovations in our
                company.{" "}
              </WidgetDetails>
              <WidgetDetails>
                I strongly believe that all the members of the RAKtherm will
                soon position themselves as the best in their respective niches
                and expand their reach over a wide geographical area. It gives
                me immense pleasure to say that today we are among the best
                companies in plastic converting industries, and as the chairman
                it is a matter of great pride for me which I intend to uphold by
                committing to be consistent in our products and services.
              </WidgetDetails>
              <WidgetDetails>
                As we strive to make RAKtherm better and more valuable to our
                customers and employees, I want to thank all who have supported
                us to reach what we are in today.{" "}
              </WidgetDetails>

              <Title style={{ margin: "0px" }}>MR. ALI HASHIM </Title>
              <WidgetDetails>Chairman</WidgetDetails>
            </RightPanel>
          </Wrapper>
        </Container>
      </Content>
    </>
  );
};

export default ChairmansMessage;
