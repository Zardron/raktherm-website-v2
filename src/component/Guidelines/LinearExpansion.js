import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  Content,
  ContentDetails,
  Icon,
  Image,
  MinusIcon,
  PlusIcon,
  Title,
} from "../../assets/styled/GuidelinesStyle";

const LinearExpansion = () => {
  const [isActive, setIsActive] = useState(null);
  const openAccordion = (index) => {
    if (isActive === index) {
      return setIsActive(null);
    }

    setIsActive(index);
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
              <ContentDetails>
                Linear expansion of pipes is directly proportional to the heat
                subjected to the pipe material. Hence, cold water pipes have
                practically no linear expansion and could be neglected in the
                installation design.
              </ContentDetails>
              <ContentDetails>
                On the other hand, expansion of pipes is significant in warm
                water and heating installations and in extreme temperature
                varying environments, and therefore needs to be considered.
                Formula for Calculation of Linear Expansion
              </ContentDetails>
              <ContentDetails>
                The linear expansion ∆L is calculated according to following
                formula:
              </ContentDetails>
              <ContentDetails>∆L=α• L•∆T</ContentDetails>
              <ContentDetails style={{ marginBottom: "0px" }}>
                Where: ∆L Expanded length (mm)
              </ContentDetails>
              <ContentDetails style={{ marginBottom: "0px" }}>
                α Coefficient of linear expansion (mm/mK)
              </ContentDetails>
              <ContentDetails style={{ marginBottom: "0px" }}>
                L Length of segment in (mm)
              </ContentDetails>
              <ContentDetails>
                ∆L Temperature difference between working and installation
                Linear Expansion Calculation
              </ContentDetails>
              <ContentDetails>
                Example: Assuming you need to calculate the expansion (∆L) of a
                standard RAKtherm pipe segment
              </ContentDetails>
              <ContentDetails>
                (L) of 1.6 meters at a maximum working temperature of 70°C.
              </ContentDetails>
              <ContentDetails style={{ marginBottom: "0px" }}>
                You know that the RAKtherm standard pipe has a coefficient of
                linear expansion of (α = 0.15).
              </ContentDetails>
              <ContentDetails>
                You know that the installation was executed at the typical
                ambient temperature of 25°C.
              </ContentDetails>
              <ContentDetails>
                ∆L =α•L •∆L or ∆L = 0.15 *1.6 *(70°C -25°C) =10.8 mm
              </ContentDetails>
              <ContentDetails style={{ marginBottom: "0px" }}>
                That means you can expect a linear expansion of 10.8 mm for this
                segment of pipe if the temperature difference is respected.
              </ContentDetails>
              <ContentDetails>
                Alternatively, you can quickly obtain the result from the
                following table for different types of pipe:
              </ContentDetails>
              <Image src="https://www.raktherm.com/assets/images/Linear.jpg" />
            </Content>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default LinearExpansion;
