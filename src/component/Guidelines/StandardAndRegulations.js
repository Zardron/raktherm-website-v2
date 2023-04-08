import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  Content,
  ContentDetails,
  ContentDetailss,
  ContentTitle,
  Icon,
  PlusIcon,
  MinusIcon,
  Title,
} from "../../assets/styled/GuidelinesStyle";

const StandardAndRegulation = () => {
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
              <ContentDetails>Standards & Regulations</ContentDetails>
              <ContentTitle style={{marginBottom: "5px"}}>
                RAKtherm Pipes and fittings are produced with the following
                standards and regulations:
              </ContentTitle>
              <ContentDetailss style={{ backgroundColor: "#CCCCCC" }}>
                DIN 1988 DVGW Code of Practice (Drinking water supply systems;
                materials, components, appliances, design and installation).
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#E5E5E5" }}>
                DIN 8076 Standard for testing metal threaded joints.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#CCCCCC" }}>
                DIN 8077 Polypropylene (PP) pipe dimensions.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#E5E5E5" }}>
                DIN 8078 Polypropylene (PP) pipes; general quality requirements
                testing & chemical resistance of pipes and fittings.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#CCCCCC" }}>
                DIN 2999 Standards for fittings with threaded metallic inserts.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#E5E5E5" }}>
                DIN 169621Ptl Pipe joint assemblies and fittings for type 1 & 2
                polypropylene (PP) pressure pipes; bends produced by segment
                inserts for buff welding dimensions.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#CCCCCC" }}>
                DIN 16928 Installation, pipe and fitting connections.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#E5E5E5" }}>
                DIN 4109 Noise control in buildings.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#CCCCCC" }}>
                DIN 4140 Insulation of service installations.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#E5E5E5" }}>
                DVS 2207 Welding of thermoplastic pipes and fittings.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#CCCCCC" }}>
                DVS 2208 Welding machines & devices for thermoplastic pipes and
                fittings.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#E5E5E5" }}>
                BS 6920 Suitability of non-metallic products for use in contact
                with water in tended for human consumption with regard to their
                effect on the quality of the water.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#CCCCCC" }}>
                DIN 16836 Multilayer Pipes-General Requirement and Testing DVGW
                W544 General Requirements and Testing of plastic pipes ISO 9001
                -2008 Quality Management system.
              </ContentDetailss>
              <ContentDetailss style={{ backgroundColor: "#E5E5E5" }}>
                OHSAS 1 8001 British standard for Health and safety management
                system
              </ContentDetailss>
            </Content>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default StandardAndRegulation;
