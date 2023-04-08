import styled from "styled-components";
import { ImMinus, ImPlus } from "react-icons/im";
import { BsDot } from "react-icons/bs";

export const Accordion = styled.div``;

export const AccordionItem = styled.div`
  margin-bottom: 15px;
  border-bottom: 2px solid #f2f5fb;
`;

export const AccordionTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const AccordionContent = styled.div``;

export const Icon = styled.div``;

export const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  position: relative;
  z-index: 1;
  display: block;
  text-decoration: none;
  color: #3a4d6a;
  padding-left: 20px;
  font-size: 14px;
  cursor: pointer;
`;

export const MinusIcon = styled(ImMinus)`
  background-color: #008063;
  color: #80c0a9;
  font-size: 32px;
  padding: 0px 10px;
  cursor: pointer;
`;

export const PlusIcon = styled(ImPlus)`
  background-color: #f2f5fb;
  color: #61728d;
  font-size: 32px;
  padding: 0px 10px;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 15px 20px 20px 50px;
  border: none;
  border-bottom: 2px solid;
  border-left: 2px solid;
  border-bottom-color: #008053;
  border-left-color: #008053;
  margin-top: 30px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  position: relative;
  z-index: 1;
  display: block;
  text-decoration: none;
  color: #3a4d6a;
  font-size: 14px;
`;

export const Dot = styled(BsDot)`
  width: 4%;
  font-size: 24px;
  margin-left: 20px;
`;
export const Details = styled.div`
  display: flex;
  vertical-align: top; /* here */
`;

export const Text = styled.span`
  padding-top: 2px;
  width: 96%;
`;

export const TextTitle = styled.div`
  margin-bottom: 20px;
`;

export const ContentTitle = styled.div`
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ContentDetails = styled.div`
  margin-bottom: 15px;
  text-align: justify;
`;

export const ContentDetailss = styled.div`
  text-align: justify;
  padding: 5px 10px;
`;

export const Image = styled.img`
  margin: 15px 0px;
`;