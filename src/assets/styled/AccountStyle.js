import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";
import { ImFilePdf } from "react-icons/im";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import _BANNER from "../images/raktherm-worldwide-banner.jpg";
import __BANNER from "../images/my-raktherm-banner.jpg";
import { BiRefresh } from "react-icons/bi";

export const Container = styled.div`
  width: 1270px;
  margin-right: auto;
  margin-left: auto;
`;

export const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
`;

export const LeftPanel = styled.div`
  width: 25%;
  padding-right: 10px;
`;

export const RightPanel = styled.div`
  padding-left: 10px;
  width: 75%;
`;

export const BannerPage = styled.div`
  background-image: url(${__BANNER});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

export const BannerPages = styled.div`
  background-image: url(${__BANNER});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  padding-top: 41vh;
  border-bottom: 3px solid #008053;
  padding-bottom: 40px;
`;
export const BannerTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 0.77;
  position: relative;
  margin: 0 0 15px 0;
  padding-left: 15px;
  text-transform: uppercase;
  color: #ffffff !important;
`;

export const BannerTitleLine = styled.span`
  position: absolute;
  left: 0;
  color: #008053;
  font-size: 25px;
  font-weight: 900;
`;

export const BannerTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  color: #d4e3ee;
  font-size: 14px;
`;

export const Arrow = styled.span`
  font-family: "Montserrat", sans-serif;
  color: #d4e3ee;
  font-size: 20px;
  padding: 0px 10px;
`;

export const ActiveLink = styled.span`
  font-family: "Montserrat", sans-serif;
  color: #fff;
  font-size: 14px;
`;

export const AboutUsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GetInTouch = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 30px;
  height: 32px;
  padding: 0 14px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #008053;
  -webkit-border-radius: 0;
  border: 2px solid white;
  -moz-border-radius: 0;
  border-radius: 0;
  background-color: #fff;

  :hover {
    background-color: transparent;
    border: 2px solid white;
    color: white;
  }
`;

export const AboutUsDetails = styled.div``;

export const GetInTouchDetails = styled.div``;

export const WidgetTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #3a4d6a;
`;

export const ArrowRight = styled(RiArrowDropRightLine)`
  font-size: 22px;
  float: right;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  opacity: 0;
`;

export const WidgetContent = styled.div`
  background-color: white;
`;

export const ProjectContent = styled.div`
  background-color: #f4f8fe;
`;

export const WidgetLink = styled(Link)`
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

export const WidgetDetails = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 25px;
  color: #61728d;
`;

export const Details = styled.div`
  width: 98%;
  display: flex;
  font-size: 14px;
  color: #61728d;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  margin: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #3a4d6a;
`;

export const WidgetSubTitle = styled.div`
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

export const ChecklistContainer = styled.div`
  display: flex;
`;

export const Check = styled(ImCheckmark)`
  width: 2%;
  color: #b7c6cf;
  margin-top: 2px;
  font-size: 14px;
  font-weight: 900;
`;

export const Button = styled.button`
  padding: 6px 15px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  color: white;
  background-color: #008053;
  text-transform: uppercase;
  margin-bottom: 50px;
  border: 2px solid #008053;
  width: 10%;

  :hover {
    color: #008053;
    background-color: white;
    border: 2px solid #008053;
  }
`;

export const JoinMyRakthermBtn = styled(Link)`
  padding: 6px 15px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  color: white;
  background-color: #008053;
  text-transform: uppercase;
  margin-bottom: 50px;
  border: 2px solid #008053;

  :hover {
    color: #008053;
    background-color: white;
    border: 2px solid #008053;
  }
`;

export const PDF = styled(ImFilePdf)`
  color: #ff3c00;
  font-size: 18px;
  margin-right: 20px;
`;

export const PDFButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  height: 50px;
  padding: 0 30px;
  text-align: left;
  margin-bottom: 15px;
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

export const Image = styled.img``;

export const InputField = styled.input`
  font-family: "Montserrat", sans-serif;
  line-height: 40px;
  font-weight: 400;
  font-size: 14px;
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  padding: 0 11px 0px 15px;
  resize: none;
  color: #61728d;
  border: none;
  border: 1px solid #d8d8d8;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none !important;
  transition: all 0.1s ease;

  :focus {
    outline: none;
    border-top: 2px solid #008053;
    border-left: 2px solid #008053;
    border-right: 2px solid #008053;
    border-bottom: 1px solid #008053a1;
    transition: all 0.1s ease;
  }
`;

export const Select = styled.select`
  font-family: "Montserrat", sans-serif;
  line-height: 40px;
  font-weight: 400;
  font-size: 14px;
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  padding: 0 11px 0px 15px;
  resize: none;
  color: #61728d;
  border: none;
  border: 1px solid #d8d8d8;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none !important;
  transition: all 0.1s ease;

  :focus {
    outline: none;
    border-top: 2px solid #008053;
    border-left: 2px solid #008053;
    border-right: 2px solid #008053;
    border-bottom: 1px solid #008053a1;
    transition: all 0.1s ease;
  }
`;

export const TextArea = styled.textarea`
  font-family: "Montserrat", sans-serif;
  line-height: 40px;
  font-weight: 400;
  font-size: 14px;
  width: 100%;
  padding: 0 11px 0px 15px;
  resize: none;
  color: #61728d;
  border: none;
  border: 1px solid #d8d8d8;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none !important;
  transition: all 0.1s ease;

  :focus {
    outline: none;
    border-top: 2px solid #008053;
    border-left: 2px solid #008053;
    border-right: 2px solid #008053;
    border-bottom: 1px solid #008053a1;
    transition: all 0.1s ease;
  }
`;

export const CaptchaContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Captcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  line-height: 40px;
  font-weight: 400;
  font-size: 14px;
  width: 10%;
  margin-bottom: 5px;
  padding: 0 11px 0px 15px;
  resize: none;
  color: white;
  border: none;
  border: 1px solid #d8d8d8;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  background-color: #008053;
  box-shadow: none !important;
  transition: all 0.1s ease;

  :focus {
    outline: none;
    border-top: 2px solid #008053;
    border-left: 2px solid #008053;
    border-right: 2px solid #008053;
    border-bottom: 1px solid #008053a1;
    transition: all 0.1s ease;
  }
`;

export const RefreshIcon = styled(BiRefresh)`
  font-size: 32px;
  color: white;
`;

export const RefreshButton = styled.button`
  background-color: #008053;
  padding: 2px 8px;
  margin-bottom: 5px;
  margin-left: 10px;
  border: 2px solid #008053;

  :hover {
    background-color: white;
    border: 2px solid #008053;

    & ${RefreshIcon} {
      color: #008053;
    }
  }
`;

export const Download = styled.div`
  background-image: url("https://www.raktherm.com/assets/images/background/download.jpg");
  background-attachment: fixed;
  background-position: bottom center;
  background-size: cover;
`;