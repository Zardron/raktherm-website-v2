import React from "react";
import styled from "styled-components";

const WidgetDetails = styled.div`
text-align: justify;
  font-weight: 500;
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

const ChairmansMessage = () => {
  return (
    <>
      <Title>CHAIRMAN’S MESSAGE</Title>
      <WidgetDetails>
        Plastics have changed the world around us in ways more that we can
        account for, and in the days ahead the role of plastics will not
        diminish. On the contrary we will see increase use of plastics in novel
        applications. We at RAKtherm understand our responsibilities and are
        prepared to meet the challenges and demands of the future through
        breakthrough concepts and innovative products.{" "}
      </WidgetDetails>
      <WidgetDetails>
        We invest thousands on man hours in making our organization valuable to
        our partners and consumers. In addition to that, our research team is
        making steady progress in creating better and sustainable plastics for
        the future generation.
      </WidgetDetails>
      <WidgetDetails>
        Since our inception we have grown in strength and presence, and today
        our products gained the trust of 32 different countries. We are capable
        of producing high quality products and our capability to deliver added
        value products. Thanks to our dedicated and highly talented employees
        hired from a diverse cultural and social background.
      </WidgetDetails>
      <WidgetDetails>
        We have always worked hard to adhere to the guidelines and standards
        accepted internationally. To that end, we spend a significant portion of
        our revenues in research and development. In our R&D facility, while the
        research and development team is concern in making products better, our
        marketing team is concern in informing the clients regarding the latest
        innovations in our company.{" "}
      </WidgetDetails>
      <WidgetDetails>
        I strongly believe that all the members of the RAKtherm will soon
        position themselves as the best in their respective niches and expand
        their reach over a wide geographical area. It gives me immense pleasure
        to say that today we are among the best companies in plastic converting
        industries, and as the chairman it is a matter of great pride for me
        which I intend to uphold by committing to be consistent in our products
        and services.
      </WidgetDetails>
      <WidgetDetails>
        As we strive to make RAKtherm better and more valuable to our customers
        and employees, I want to thank all who have supported us to reach what
        we are in today.{" "}
      </WidgetDetails>

      <Title style={{ margin: "0px" }}>MR. ALI HASHIM </Title>
      <WidgetDetails>Chairman</WidgetDetails>
    </>
  );
};

export default ChairmansMessage;
