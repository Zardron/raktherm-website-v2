import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  Content,
  ContentDetails,
  Icon,
  MinusIcon,
  PlusIcon,
  Title,
} from "../../assets/styled/GuidelinesStyle";

const RakthermPressureTest = () => {
  const [isActive, setIsActive] = useState(null);
  const [data, setData] = useState(null);

  const openAccordion = (index) => {
    if (isActive === index) {
      return setIsActive(null);
    }

    setIsActive(index);
    setData(index);
  };
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionTitle onClick={() => openAccordion(!isActive)}>
            <Icon>
              {isActive ? <MinusIcon>-</MinusIcon> : <PlusIcon>+</PlusIcon>}
            </Icon>
            <Title>Click here to view</Title>
          </AccordionTitle>
          <AccordionContent
            className={isActive ? "accordion-item" : "accordion-item collapsed"}
          >
            <Content>
              <ContentDetails>RAKTHERM PRESSURE TEST</ContentDetails>
              <ContentDetails>
                RAKtherm pipes due to their material properties expand when
                subject to pressure, which influences the test result, this may
                also be affected by differences in temperature of pipe and test
                medium resulting from a high thermal expansion coefficient of
                the pipe material, a change of 0.5 to 1 bar. Thus, the test
                medium should be kept at constant temperature throughout the
                test acc to DIN 1988 TRWI the pressure test must be performed
                1.5 times of the operating pressure. Using cold water, the pipe
                system should be filled slowly and bled completely using
                calibrated measuring instruments that indicate pressure changes
                of 0.1 bar wherever possible. Measurements should be taken at
                the lowest point of the pipe system.
              </ContentDetails>
              <ContentDetails>
                Where pipes and fittings have been welded, the pressure test
                should not be performed before two hours have elapsed after the
                last welding operation. The pressure test consists of two
                stages: For the first stage, a test pressure equal to the
                permissible working pressure plus 5 bar should be applied twice
                within 30 minutes at 10 minute intervals. Then the pressure
                should be checked. In case more than a 0.6 bar drop occurs over
                a period of 30 minutes at a rate of 0.1 bar/min, then a leakage
                is reported. The second stage should follow the first stage
                without interval and should last minimum of 2 hours. Then the
                Pressure drop should be checked. If the pressure drop is more
                than 0.2 bar and the pipe work shows signs of leakage, then the
                network should be corrected and the test must be repeated.
              </ContentDetails>
            </Content>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default RakthermPressureTest;
