import React from "react";
import { SignUp, Topbar } from "../assets/styled/TopbarStyle";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import SubFooter from "../component/SubFooter";

const CorporateStrategy = () => {
  return (
    <>
      <Topbar>
        <div class="containers" style={{ padding: "5px 25px" }}>
          <SignUp>Sign up to Join My RAKtherm</SignUp>
        </div>
      </Topbar>
      <div class="containers">
        <Navbar />
      </div>
      <h1>Corporate Strategy</h1>
      <SubFooter />
      <Footer />
    </>
  );
};

export default CorporateStrategy;
