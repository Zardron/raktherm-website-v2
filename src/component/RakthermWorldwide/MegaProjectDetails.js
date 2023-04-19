import React from "react";
import styled from "styled-components";
import { TfiPlus } from "react-icons/tfi";
import "../../assets/component.css";
import { MEGA_PROJECT } from "../../assets/data/MegaProjectData";

const TitleWrapper = styled.div`
  display: flex;
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

const MegaProjectContainer = styled.div`
  margin-top: 25px;
  padding-bottom: 50px;
`;

const Items = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  padding: 10px !important;
  margin: 8.5px !important;
`;

const Div = styled.div`
  & ${Items}:hover {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  }
`;

const MegaProjectDetails = () => {
  return (
    <>
      <Div>
        <ItalicText>What We Did</ItalicText>
      </Div>
      <TitleWrapper>
        <LineTitle>|</LineTitle>
        <Title>OUR PROJECTS</Title>
      </TitleWrapper>

      <MegaProjectContainer>
        <Div className="gallery-image-grid">
          {MEGA_PROJECT.map((data, index) => (
            <Items className="grid-item tab-1" key={index}>
              <a href="">
                <Div className="block-image-gallery">
                  <img src={data.src} alt="" className="img-full" />
                  <Div className="overlay-1"></Div>
                  <Div className="overlay-2"></Div>
                  <Div className="content">
                    <Div className="title">{data.title}</Div>
                  </Div>
                  <a href="" className="readmore-icons">
                    <TfiPlus className="icons" />
                  </a>
                </Div>
              </a>
            </Items>
          ))}
        </Div>
      </MegaProjectContainer>
    </>
  );
};

export default MegaProjectDetails;
