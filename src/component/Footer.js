import React from "react";
import { Container, Title, Wrapper } from "../assets/styled/FooterStyle";
import { ReactComponent as MySVG } from "../logo.svg";
import ScrollToTop from "react-scroll-to-top";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>
            © 2017 Copyright © Powered By Raktherm. - All Rights Reserved.
          </Title>
        </Wrapper>
      </Container>
      <ScrollToTop
        smooth
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          borderRadius: "0px",
          backgroundColor: "#1a5b39",
          border: "1px solid white",
          bottom: "60px",
          boxShadow: "none"
        }}
        component={<MdKeyboardDoubleArrowUp style={{color: "white", fontSize: "36px"}}/>}
      />
    </>
  );
};

export default Footer;
