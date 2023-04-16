import styled from "styled-components";
import Welding from "../Guidelines/Welding";
import LinearExpansion from "../Guidelines/LinearExpansion";
import RakthermPressureTest from "../Guidelines/RakthermPressureTest";
import StandardAndRegulation from "../Guidelines/StandardAndRegulations";
import TransportAndStorage from "../Guidelines/TransportAndStorage";

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

const WidgetSubTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 11.62px;
  font-weight: 700;
  line-height: 18px;
  margin: 25px 0px;
  text-transform: uppercase;
  color: #3a4d6a;
`;

const Guidelines = () => {
  return (
    <>
      <Title>Guidelines</Title>
      <WidgetSubTitle>1. Welding</WidgetSubTitle>
      <Welding /> {/* Accordion */}
      
      <WidgetSubTitle>2. LINEAR EXPANSION</WidgetSubTitle>
      <LinearExpansion /> {/* Accordion */}

      <WidgetSubTitle>3. RAKTHERM PRESSURE TEST</WidgetSubTitle>
      <RakthermPressureTest /> {/* Accordion */}

      <WidgetSubTitle>4. STANDARDS & REGULATIONS</WidgetSubTitle>
      <StandardAndRegulation /> {/* Accordion */}

      <WidgetSubTitle>5. TRANSPORT & STORAGE</WidgetSubTitle>
      <TransportAndStorage /> {/* Accordion */}
    </>
  );
};

export default Guidelines;
