import React from "react";
import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";

const WidgetDetails = styled.div`
text-align: justify;
font-weight: 500;
  font-size: 14px;
  margin-bottom: 25px;
  color: #61728d;
`;

const Details = styled.div`
font-weight: 500;
  width: 98%;
  display: flex;
  font-size: 14px;
  color: #61728d;
  margin-left: 10px;
  margin-bottom: 5px;
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

const WidgetSubTitle = styled.div`
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

const ChecklistContainer = styled.div`
  display: flex;
`;

const Check = styled(ImCheckmark)`
  width: 2%;
  color: #b7c6cf;
  margin-top: 2px;
  font-size: 14px;
  font-weight: 900;
`;

const PipingSystemsUsage = () => {
  return (
    <>
      <Title>PIPING SYSTEMS USAGE</Title>
      <WidgetDetails>
        A versatile and comprehensive delivery system is used in the transfer of
        high pressure warm/cold water and other fluids in all modern
        residential, commercial, and industrial applications. The creative
        solutions provided by RAKtherm in its product base renders it a leader
        in the industry.
      </WidgetDetails>
      <WidgetSubTitle>PPR PIPING SYSTEMS</WidgetSubTitle>

      <ChecklistContainer>
        <Check />
        <Details>
          Potable installations inside houses, high rise buildings, hotels,
          hospitals and virtually all types of commercial and residential
          buildings
        </Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>
          Factories with high-pressure water and compressed air circuits.
        </Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>Rain drainage and collection systems.</Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>
          Indoor and outdoor swimming pools, gyms and their water filtration
          circuits and water installations.
        </Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>
          Piping networks for all types of irrigation and agricultural
          applications and Pressurized Piping Networks.
        </Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>
          Piping networks for all types for industrial applications like the
          delivery of aggressive fluids containing acidic, alkaline, reactive
          and corrosive chemicals.
        </Details>
      </ChecklistContainer>

      <WidgetSubTitle style={{ marginTop: "10px" }}>
        INCLUDING APPLICATIONS FOR:
      </WidgetSubTitle>

      <ChecklistContainer>
        <Check />
        <Details>
          Connections from municipality water supply to the tanks and
          reservoirs.
        </Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>Boilers and radiator connections and networks.</Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>
          Risers for water delivery, ventilation, and pressure relief.
        </Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>
          Water transport from pumps to upper tanks and distribution points.
        </Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>
          Connections through meters, and distributor manifolds.
        </Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>Distributions inside flats, apartments, houses etc.</Details>
      </ChecklistContainer>

      <ChecklistContainer>
        <Check />
        <Details>
          Under floor network distribution and under floor heating networks.
        </Details>
      </ChecklistContainer>
    </>
  );
};

export default PipingSystemsUsage;
