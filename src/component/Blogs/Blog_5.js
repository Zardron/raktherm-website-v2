import React from "react";
import {
  WidgetDetails,
  Title,
  BlogImg,
  Panel,
  ImageWithTextWrapper,
} from "../../assets/styled/BlogStyle";

const Blog_5 = () => {
  return (
    <>
      <BlogImg
        src="https://www.raktherm.com/images/building.png"
        alt="blog-1"
      />
      <center>
        <Title style={{ marginBottom: "0px" }}>
          Case Study: NSHAMA Development LLC - Innovative U Loop
        </Title>
        <Title style={{ marginBottom: "20px" }}>
          Expansion System for Potable Water Line
        </Title>
      </center>

      <WidgetDetails style={{ marginBottom: "0px" }}>
        <strong>Client:</strong> NSHAMA Development LLC
      </WidgetDetails>
      <WidgetDetails style={{ marginBottom: "0px" }}>
        <strong>Project Type:</strong> Residential Building (2 Tower Building)
      </WidgetDetails>
      <WidgetDetails style={{ marginBottom: "0px" }}>
        <strong>Project Location:</strong> Plot No. 922-8918 (PH-01-09 & 10), Al
        Yalayes, Dubai
      </WidgetDetails>
      <WidgetDetails style={{ marginBottom: "0px" }}>
        <strong>Contractor:</strong> Shapoorji Pallonji Mideast LLC
      </WidgetDetails>
      <WidgetDetails style={{ marginBottom: "0px" }}>
        <strong>Challenges:</strong> Providing multiple expansion joints for the
        potable water lines in a cost-effective way
      </WidgetDetails>
      <WidgetDetails>
        <strong>Solution:</strong> PPR U loop Expansion System
      </WidgetDetails>

      <BlogImg src="https://www.raktherm.com/images/U-LOOP.png" alt="blog-1" />

      <WidgetDetails>
        NSHAMA Development LLC, a prominent real estate developer in Dubai,
        engaged Shapoorji Pallonji Mideast LLC to construct a new residential
        building of two parallel towers. The project faced a significant
        challenge in providing multiple expansion joints for the potable water
        line between the two buildings.
      </WidgetDetails>

      <WidgetDetails>
        The buildings' expansion and contraction due to temperature fluctuations
        and other factors necessitated expansion joints to prevent looping and
        potential damage to the water supply line. Mr. Sujan, the SPOC on
        RAKtherm's side, addressed this challenge.
      </WidgetDetails>

      <ImageWithTextWrapper>
        <Panel style={{ paddingRight: "10px", flex: ".94" }}>
          {" "}
          <BlogImg
            style={{
              width: "100%",
              paddingTop: "5px",
              height: "280px",
              objectFit: "cover",
            }}
            src="https://www.raktherm.com/images/u-loop-pipes.png"
            alt="blog-1"
          />
        </Panel>
        <Panel>
          <WidgetDetails>
            RAKtherm proposed a PPR U loop expansion system to tackle the
            problem. The solution involved inserting two PPR U loops (one each
            before and after the building joints) with a dimension of more than
            2∆L for the width and a minimum length of 4∆L of the building
            expansion joint.
          </WidgetDetails>

          <WidgetDetails>
            RAKtherm proposed a PPR U loop expansion system to tackle the
            problem. The solution involved inserting two PPR U loops (one each
            before and after the building joints) with a dimension of more than
            2∆L for the width and a minimum length of 4∆L of the building
            expansion joint. As an alternative, RAKtherm suggested using SS or
            certified brass expansion joints. However, this option required
            cleaning and maintenance every six months due to the risk of
            bacteria buildup, dust accumulation, and potential blockage.
          </WidgetDetails>
        </Panel>
      </ImageWithTextWrapper>
      <WidgetDetails>
        By implementing the U loop expansion system, NSHAMA Development LLC
        achieved a cost reduction of 75K Dirhams, and the project was completed
        within the two-year timeframe. In addition, the solution ensured that
        the potable water line was installed correctly, maintaining a smooth
        operation as the buildings expanded and contracted.
      </WidgetDetails>

      <WidgetDetails>
        In summary, RAKtherm's innovative U loop expansion system successfully
        addressed the unique challenge faced by NSHAMA Development LLC during
        the construction of their new residential building. The system provided
        a cost-effective and efficient solution for the potable water line,
        ensuring an uninterrupted water supply for the building's residents.
      </WidgetDetails>
    </>
  );
};

export default Blog_5;
