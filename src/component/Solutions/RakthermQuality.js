import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { ImFilePdf } from "react-icons/im";
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

const Details = styled.div`
  font-size: 14px;
  margin-bottom: 25px;
  color: #61728d;
  padding-left: 30px;
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
  margin-bottom: 14px;
`;

const SubTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 11.62px;
  font-weight: 700;
  line-height: 18px;
  margin: 0;
  color: #3a4d6a;
  padding-left: 30px;
`;

const IndentedDetails = styled.div`
  padding-left: 30px;
  margin-bottom: 20px;
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
              <Title>RAKTHERM QUALITY</Title>
              <WidgetDetails>
                Our quality management system is defined to ensure consistent
                high-quality production to intensify product integrity. We have
                developed a successful management principles based on the
                concept of premium quality that comprise of planning, quality
                control, quality assurance, and quality improvement. This
                principle consists of individual employee involvement in the
                process that meets exactly engineering requirements to withstand
                technical competitiveness in global market.
              </WidgetDetails>

              <WidgetSubTitle>QUALITY GUARANTEE</WidgetSubTitle>
              <WidgetDetails>
                Enjoy the benefit of <strong>15-YEARS WARRANTY</strong> for all
                RAKtherm piping network systems starting from the date of your
                purchase. You may ask your local representatives for more
                details.
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
                defining the outline on how it will be fabricated. Planning is
                executed through research, conducting assessments, and deciding
                the desirable outcome based on consumers’ and engineers’
                perspectives.
              </WidgetDetails>

              <WidgetSubTitle>
                COMPREHENSIVE QUALITY CONTROL SYSTEMS
              </WidgetSubTitle>
              <WidgetDetails>
                With continuous globalization of the business, we are
                implementing a rigid quality control system that covers the
                entire entity of all aspects associated in the production which
                signifies complete overview and re-evaluation of product
                specifications. A comprehensive quality system begins from
                designing the required specifications, sourcing out meticulously
                the finest quality raw materials that will guarantee outstanding
                product output, appropriate packing, proper storage, and
                shipping to customers.
              </WidgetDetails>

              <WidgetSubTitle>
                QUALITY ASSURANCE USING STATE OF THE ART LABORATORY
              </WidgetSubTitle>
              <WidgetDetails>
                We never comprise RAKtherm’s quality ever since, thus we are
                constantly maintaining the quality we are known for. Our
                products and services are progressively enhanced through strict
                compliance with effective quality assurance system using state
                of the art laboratory. We ensure that quality requirements are
                being fulfilled in order to provide suitability, effectiveness,
                and efficiency of our products.
              </WidgetDetails>

              <WidgetSubTitle>CONSISTENT QUALITY IMPROVEMENT</WidgetSubTitle>
              <WidgetDetails>
                In today’s fast-paced technological advancements, we are geared
                towards a better and more effective solution to adapt
                accordingly by developing our products through innovation.
                RAKtherm has survived the global market competition throughout
                the years by creating more effective processes with
                implementation of new ideas for product improvement and
                enhancement. perspectives.
              </WidgetDetails>
            </RightPanel>
          </Wrapper>
        </Container>
      </Content>
    </>
  );
};

export default RakthermQuality;
