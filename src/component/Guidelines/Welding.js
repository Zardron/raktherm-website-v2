import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  Content,
  ContentDetails,
  ContentTitle,
  Details,
  Dot,
  Icon,
  PlusIcon,
  MinusIcon,
  Text,
  TextTitle,
  Title,
  Image,
} from "../../assets/styled/GuidelinesStyle";

const Welding = () => {
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
          <AccordionTitle onClick={() => openAccordion(1)}>
            <Icon>
              {isActive === 1 ? (
                <MinusIcon>-</MinusIcon>
              ) : (
                <PlusIcon>+</PlusIcon>
              )}
            </Icon>
            <Title>General guidelines for the installation</Title>
          </AccordionTitle>
          <AccordionContent
            className={
              isActive === 1 ? "accordion-item" : "accordion-item collapsed"
            }
          >
            <Content>
              <TextTitle>For pipe work inside buildings</TextTitle>
              <Details>
                <Dot />
                <Text>
                  No pipe should be secured to another pipe or used as a support
                  for other pipes.
                </Text>
              </Details>
              <Details>
                <Dot />
                <Text>
                  The arrangement of pipes should facilitate their
                  identification. Mounting plates should be used where required.
                </Text>
              </Details>
              <Details>
                <Dot />
                <Text>
                  Pipes should be laid so as to prevent the formation of air
                  locks. Where pipes are likely to suffer from frost
                  damage,drainage fittings should be provided at the lowest
                  points of the system.
                </Text>
              </Details>
              <Details>
                <Dot />
                <Text>
                  Where pipes are laid above one another, exposed cold water
                  pipes should be on the lowest level in order to minimize the
                  risk of condensation.
                </Text>
              </Details>
              <Details>
                <Dot />
                <Text>
                  Where a system provides water to two or more buildings, a
                  riser should be installed in each building.
                </Text>
              </Details>
              <Details>
                <Dot />
                <Text>
                  Where draw-off points on a storey require backflow prevention
                  but are not individually isolated (DIN 1988 part 4), the main
                  branch pipe should branch off from the riser not less than 300
                  mm above the maximum possible water level on the storey.
                </Text>
              </Details>
            </Content>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion>
        <AccordionItem>
          <AccordionTitle onClick={() => openAccordion(2)}>
            <Icon>
              {isActive === 2 ? (
                <MinusIcon>-</MinusIcon>
              ) : (
                <PlusIcon>+</PlusIcon>
              )}
            </Icon>
            <Title>Pipes & Fittings</Title>
          </AccordionTitle>
          <AccordionContent
            className={
              isActive === 2 ? "accordion-item" : "accordion-item collapsed"
            }
          >
            <Content>
              <ContentTitle>
                Instructions for Welding of RAKtherm Pipes & Fittings
              </ContentTitle>
              <ContentDetails>
                The welding machine is heated up to 260 °C (described in “Using
                RAKtherm Welding Device & Tools”).
              </ContentDetails>
              <ContentDetails>
                1. Use RAKtherm pipe cutter to cut the pipe. Make sure that a
                straight and clean pipe end results and not at a skewed angle.
                This is to ensure that the welding adheres to the right
                conditions.
              </ContentDetails>
              <ContentDetails>
                The joining process during RAKtherm fusion welding can be
                divided into three stages:
              </ContentDetails>
              <ContentDetails style={{ marginBottom: "0px" }}>
                Stage I: Initial heating and fitting expansion.
              </ContentDetails>
              <ContentDetails style={{ marginBottom: "0px" }}>
                Stage II: Heat soaking to create the joint.
              </ContentDetails>
              <ContentDetails>Stage Ill: Joint cooling.</ContentDetails>
              <ContentTitle>
                Note: Stages I and II are commonly termed ‘fusion time’. For
                successful joining of pipes, at least three preparation stages
                must be followed:
              </ContentTitle>
              <ContentDetails>
                Firstly, pipe ends must have properly finished squared ends as
                opposed to having a chamfered or broken edge. This ensures that
                the central cold zones come in full contact with the welding
                tools and proper heat conduction will accordingly be achieved.
                Before welding Stabi composite pipes peel-off the aluminum
                polypropylene layer completely.
              </ContentDetails>
              <ContentDetails>
                • Secondly, the pipe surfaces to be joined must be properly
                cleaned to remove contaminants and foreign material. Otherwise,
                any contamination on the pipe surface is retained at the joint
                interface, which can significantly reduce the strength of the
                joint.
              </ContentDetails>
              <ContentDetails>
                • Finally, the pipe and fitting should be clamped during welding
                to eliminate relative movement. This ensures that the molten
                polymer is allowed to fuse fully at the fusion interface,
                developing a strong joint.
              </ContentDetails>
              <ContentDetails>
                2. Finally, the pipe and fitting should be clamped during
                welding to eliminate relative movement. This ensures that the
                molten polymer is allowed to fuse fully at the fusion interface,
                developing a strong joint.
              </ContentDetails>
              <ContentDetails>
                3. Enter the end of the pipe into the tool up to the marked
                depth without twisting it and simultaneously and also without
                twisting, push the fitting onto the heating tool, observing the
                general guidelines for heating up times outlined in table 4.1.
              </ContentDetails>
              <ContentDetails>
                Timing for heating should not start until the pipe and fitting
                reaches to the marked welding depth. Both fitting and pipe
                should be heated for a set time, known as the heating time. When
                heating time is complete, the pipe and fitting should be removed
                from the heating tool, and pressed together to the marked
                welding depth for a few seconds without twisting a homogeneous
                structure of the same material is thereupon formed. The major
                alignment should be done before insertion of the pipe and
                fitting.
              </ContentDetails>
              <ContentDetails>
                Use fusion time for minor alignment before fusion is complete
                and the assembled parts have cooled. Never mechanically stress
                the welding joint before cooling time. A cross-section of a
                properly welded RAKtherm joint will normally show a smooth
                transition between the two initial parts. This is because the
                components have uniformly melted and fused into each other to
                form one single piece. RAKtherm Electro Fusion coupling welding
                procedure please see in Technical Manual Installation.
              </ContentDetails>
            </Content>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion>
        <AccordionItem>
          <AccordionTitle onClick={() => openAccordion(3)}>
            <Icon>
              {isActive === 3 ? (
                <MinusIcon>-</MinusIcon>
              ) : (
                <PlusIcon>+</PlusIcon>
              )}
            </Icon>
            <Title>Saddles</Title>
          </AccordionTitle>
          <AccordionContent
            className={
              isActive === 3 ? "accordion-item" : "accordion-item collapsed"
            }
          >
            <Content>
              <ContentTitle>
                INSTALLATION & INSTRUCTION FOR THE WELDING SADDLES
              </ContentTitle>
              <ContentDetails>Use of RAKtherm welding saddles:</ContentDetails>
              <ContentDetails>
                • Subsequent extension of existing pipe systems.
              </ContentDetails>
              <ContentDetails>
                • Alternative use to tees, especially in maintenance and
                alteration jobs.
              </ContentDetails>
              <ContentDetails>
                • Direct branching of a service line to a supply line
                Preparation for welding Mount the RAKtherm saddle welding tool
                to the welding machine. Once the tool is positioned, check that
                the surface temperature is in the range of 260 degree C
                (described in “Using RAKtherm welding Device & Tools”). Make
                sure that the surface to be welded is clean and dry.
              </ContentDetails>
              <ContentDetails>
                Drill out the pipe at the welding point with a spiral drill bit.
                If necessary, clean the hole from any burrs. Caution is to be
                taken in drilling the correct depth and diameter see below. When
                drilling, make sure that the opposite pipe wall is not reached,
                otherwise, the pipe will be damaged
              </ContentDetails>
              <Image src="https://www.raktherm.com/assets/images/Saddles.jpg" />
              <ContentDetails>
                After drilling, remove the remaining aluminum at the entrance of
                the hole with a chamfering device. Heat up the pipe with the
                tool for 30 seconds. Subsequently, heat the saddle along with
                the external surface of the pipe for another 20 seconds, total
                of 50 sec for the pipe. Make a light pressure with the saddle on
                the tools. Make sure that the entire surface is in contact with
                the heating tool. After finishing the heating phase, remove the
                welding unit and insert the welding saddle nozzle into the
                heated drilled pipe hole. Fix under light pressure, avoiding
                rotation for an additional 30 sec.
              </ContentDetails>
              <ContentDetails>
                After drilling, remove the remaining aluminum at the entrance of
                the hole with a chamfering device. Heat up the pipe with the
                tool for 30 seconds. Subsequently, heat the saddle along with
                the external surface of the pipe for another 20 seconds, total
                of 50 sec for the pipe. Make a light pressure with the saddle on
                the tools. Make sure that the entire surface is in contact with
                the heating tool. After finishing the heating phase, remove the
                welding unit and insert the welding saddle nozzle into the
                heated drilled pipe hole. Fix under light pressure, avoiding
                rotation for an additional 30 sec.
              </ContentDetails>
            </Content>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Welding;
