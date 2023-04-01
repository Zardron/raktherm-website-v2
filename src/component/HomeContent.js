import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebebeb;
`;

const LeftPanel = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const RightPanel = styled.div`
  width: 50%;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const BlogDetails = styled.div`
  display: flex;
  padding: 20px;
`;

const ItalicText = styled.span`
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  margin: 0;
  text-transform: capitalize;
  color: #aab7ca;
`;

const LineTitle = styled.span`
  text-align: left;
  position: relative;
  color: #008053;
  font-size: 27px;
  font-weight: 900;
`;

const Title = styled.p`
  text-align: left;
  position: relative;
  color: #3a4d6a;
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 0px 10px;
`;

const MainTitle = styled.p`
  text-align: left;
  position: relative;
  color: #3a4d6a;
  font-size: 30px;
  font-weight: 700;
  padding: 0px 0px 0px 10px;
  cursor: pointer;

  :hover {
    color: #008053;
  }
`;

const GreenText = styled.span`
  text-align: left;
  position: relative;
  color: #008053;
  font-size: 30px;
  font-weight: 700;
`;

const Description = styled.p`
  text-align: justify;
  text-justify: inter-word;
  color: #777777;
  font-size: 14px;
  margin: 20px 0px;
  font-weight: 500;
`;

const Image = styled.img`
  padding: 20px;
`;

const BlogImage = styled.img`
  object-fit: cover;
`;

const BlogContainer = styled.div`
  display: flex;
  width: 100%;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const BlogLineTitle = styled.span`
  text-align: left;
  position: relative;
  color: #008053;
  font-size: 14px;
  font-weight: 900;
`;

const BlogTitle = styled.p`
  text-align: left;
  position: relative;
  color: #3a4d6a;
  font-size: 16px;
  font-weight: 700;
  padding: 0px 0px 0px 10px;
  cursor: pointer;

  :hover {
    color: #008053;
  }
`;

const BlogDescription = styled.p`
  text-align: justify;
  text-justify: inter-word;
  color: #777777;
  font-size: 12px;
  font-weight: 500;
  padding: 0px 20px 20px 20px;
`;

const BlogDescriptions = styled.p`
  text-justify: inter-word;
  color: #777777;
  font-size: 14px;
  font-weight: 500;
  padding: 0px 20px 20px 20px;
`;

const HomeContent = () => {
  return (
    <>
      <div className="containers">
        <Wrapper>
          <LeftPanel>
            <Image
              src="https://www.raktherm.com/assets/images/pp-and-UPVC-group.png"
              alt="img"
            />
          </LeftPanel>
          <RightPanel>
            <TitleWrapper>
              <LineTitle>|</LineTitle>
              <Title>
                THE EMINENT HIGH-END GLOBAL MANUFACTURER
                <div>
                  <GreenText>OF PIPING SYSTEMS TECHNOLOGY</GreenText>
                </div>
              </Title>
            </TitleWrapper>
            <Description>
              With RAKtherm’s Groundbreaking RNP Technology, the pipe’s uniform
              middle-layer-construction is based on special cells to ensure
              increased in mechanical properties, wherein the inner-layer and
              outer-layer are combined, forming like a ‘sandwich construction’
              which results to exceed the requirement for noise reduction,
              durability, flexibility, and longer-service-life. A state of the
              art three-layers-pipe with solid-wall-construction, made from the
              new generation premium materials which significantly improve its
              durability compared to the traditional pipes.
            </Description>
          </RightPanel>
        </Wrapper>
      </div>

      <SubWrapper>
        <div
          className="containers"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LeftPanel>
            <Image
              src="https://www.raktherm.com/assets/images/post/index-55new.png"
              alt="img"
            />
          </LeftPanel>
          <RightPanel>
            <TitleWrapper>
              <LineTitle>|</LineTitle>
              <Title>
                RAKTHERM UNVEILS THE GROUNDBREAKING RNP TECHNOLOGY BRINGING
                TECHNOLOGICAL
                <div>
                  <GreenText>BREAKTHROUGH IN THE PIPING INDUSTRY!</GreenText>
                </div>
              </Title>
            </TitleWrapper>
            <Description>
              With RAKtherm’s Groundbreaking RNP Technology, the pipe’s uniform
              middle-layer-construction is based on special cells to ensure
              increased in mechanical properties, wherein the inner-layer and
              outer-layer are combined, forming like a ‘sandwich construction’
              which results to exceed the requirement for noise reduction,
              durability, flexibility, and longer-service-life. A state of the
              art three-layers-pipe with solid-wall-construction, made from the
              new generation premium materials which significantly improve its
              durability compared to the traditional pipes.
            </Description>
          </RightPanel>
        </div>
      </SubWrapper>

      <Wrapper style={{ backgroundColor: "#f9fafb" }}>
        <div
          className="containers"
          style={{
            margin: "50px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LeftPanel style={{ marginRight: "20px" }}>
            <BlogContainer style={{ height: "555px", marginTop: "0px" }}>
              <LeftPanel>
                <BlogImage src="https://www.raktherm.com/assets/images/post/image-50.jpg" />
              </LeftPanel>
              <RightPanel>
                <BlogDetails>
                  <BlogLineTitle>|</BlogLineTitle>
                  <BlogTitle>
                    WHY RELIABLE PLUMBING IS NECESSARY? WHAT TO LOOK FOR IN
                    FINDING THE RIGHT PIPES FOR YOUR PROJECTS
                  </BlogTitle>
                </BlogDetails>
                <BlogDescriptions>
                  The New Generation Technology For Intensified Piping Networks
                </BlogDescriptions>

                <BlogDescriptions>
                  Strengthend With Stabi and Fiber
                </BlogDescriptions>

                <BlogDescriptions>
                  Decreased Linear Expansion and Higer Flow Rate
                </BlogDescriptions>

                <BlogDescriptions>
                  RAKtherm welding devices and welding tools to ensure proper
                  fusion of pipes and fittings. It is widely acknowledged, in
                  order to establish a consistent and structurally sound joint,
                  it is necessary to follow RAKtherm fusion welding preparation
                  procedure.
                </BlogDescriptions>
              </RightPanel>
            </BlogContainer>
          </LeftPanel>
          <RightPanel>
            <TitleWrapper>
              <ItalicText>Blog Post</ItalicText>
            </TitleWrapper>
            <TitleWrapper>
              <LineTitle>|</LineTitle>
              <MainTitle>RECENT EVENTS</MainTitle>
            </TitleWrapper>

            <BlogContainer>
              <LeftPanel>
                <BlogImage src="https://res.cloudinary.com/du1euxdon/image/upload/v1677491626/img_ypngqy.jpg" />
              </LeftPanel>
              <RightPanel>
                <BlogDetails>
                  <BlogLineTitle>|</BlogLineTitle>
                  <BlogTitle>
                    WHY RELIABLE PLUMBING IS NECESSARY? WHAT TO LOOK FOR IN
                    FINDING THE RIGHT PIPES FOR YOUR PROJECTS
                  </BlogTitle>
                </BlogDetails>
                <BlogDescription>
                  Consider how difficult it would be to begin each day with
                  leaking pipes that were causing walls to collapse, causing
                  mold and fungus to grow, and clogging sinks and toilets...
                </BlogDescription>
              </RightPanel>
            </BlogContainer>

            <BlogContainer>
              <LeftPanel>
                <BlogImage
                  src="https://www.raktherm.com/upload/desc/news_51.jpg"
                  style={{ height: "200px" }}
                />
              </LeftPanel>
              <RightPanel>
                <BlogDetails>
                  <BlogLineTitle>|</BlogLineTitle>
                  <BlogTitle>
                    RAKTHERM UNLEASHED POTENTIAL IN PIPING SOLUTIONS WITH ITS
                    GROUND-BREAKING RNP TECHNOLOGY
                  </BlogTitle>
                </BlogDetails>
                <BlogDescription>...</BlogDescription>
              </RightPanel>
            </BlogContainer>
          </RightPanel>
        </div>
      </Wrapper>

      <SubWrapper style={{ backgroundColor: "#f2f7fc" }}>
        <div
          className="containers"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LeftPanel>
            <Image
              src="https://www.raktherm.com/assets/images/background/banner-6.jpg"
              alt="img"
              style={{ width: "500px", height: "300px" }}
            />
          </LeftPanel>
          <RightPanel>
            <TitleWrapper>
              <LineTitle>|</LineTitle>
              <Title>
                QUALITY GUARANTEE
                <div>
                  <GreenText>MAINTAINING A HIGH LEVEL OF QUALITY</GreenText>
                </div>
              </Title>
            </TitleWrapper>
            <Description>
              RAKtherm maintains a highly comprehensive quality control
              management program. Be it the designing process which follows
              certain specifications, choice of raw materials, packing, storage,
              shipping to customers
            </Description>
          </RightPanel>
        </div>
      </SubWrapper>
    </>
  );
};

export default HomeContent;
