import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  Content,
  ContentDetails,
  Icon,
  PlusIcon,
  MinusIcon,
  Title,
  Image,
} from "../../assets/styled/GuidelinesStyle";

const TransportAndStorage = () => {
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
              <ContentDetails>TRANSPORT STORAGE</ContentDetails>
              <ContentDetails>
                During transportation and storage, RAKtherm piping system
                components could be exposed to open air at any temperature for
                short period of time provided that it is kept in the shade
                protected from direct sunlight. However, at temperature below
                0°C, the material becomes more susceptible to damage if hard
                blows are delivered. Hence, at low temperature, the material has
                to be treated with more caution. It is not recommended that
                RAKtherm pipes and fitting be stored in open air for long period
                of time.
              </ContentDetails>
              <Image src="https://www.raktherm.com/assets/images/Transport.jpg" />
              <ContentDetails>
                Additionally, a solid base is recommended to avoid any
                deformation of pipes during transportation and storage. Even
                though RAKtherm pipes are extremely robust it is recommended to
                treat the material with care.
              </ContentDetails>
            </Content>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default TransportAndStorage;
