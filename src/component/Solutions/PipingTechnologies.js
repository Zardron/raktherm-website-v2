import React from "react";
import styled from "styled-components";
import { BsDot } from "react-icons/bs";

const WidgetTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #3a4d6a;
`;

const WidgetDetails = styled.div`
  font-size: 14px;
  margin-bottom: 25px;
  color: #61728d;
`;

const Details = styled.div`
  font-size: 14px;
  margin-bottom: 25px;
  color: #61728d;
  padding-left: 30px;
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
`;

const SubTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 11.62px;
  font-weight: 700;
  line-height: 18px;
  margin: 0;
  color: #3a4d6a;
  padding-left: 30px;
`;

const IndentedDetails = styled.div`
  padding-left: 30px;
  margin-bottom: 20px;
`;

const Dot = styled(BsDot)`
  color: #008053;
  font-size: 30px;
  font-weight: 700;
`;

const Img = styled.img`
  padding-left: 30px;
`;

const PipingTechnologies = ({ div1, div2, div3, div4, div5, div6 }) => {
  return (
    <>
      <div ref={div1}>
        <Title>RAKTHERM PIPING SYSTEMS TECHNOLOGIES</Title>
        <WidgetDetails>
          RAKtherm’s product portfolio of wide range of integrated piping
          systems is responsible for delivering technological developments and
          the research & development that leads to innovative pipe systems to
          build the most iconic projects in the world.
        </WidgetDetails>
        <WidgetDetails>
          Our commitment to plastic conversion technology and innovation
          continues to be the core of our quality management systems. As the
          construction engineering become more complex and more technically
          demanding, our engineering expertise will be the pillar to the
          advancement of the MEP industry.
        </WidgetDetails>

        <Title>1. PPR PIPING SYSTEMS</Title>

        <WidgetDetails>
          We are have carefully blended and formulated our own PP-R resins
          (polypropylene-random) which guarantee that we are only using the
          highest quality of PP-R granules in our piping systems. A random
          copolymer grade of PP-R was specially developed for engineering
          applications with certain stringent requirements.
        </WidgetDetails>

        <WidgetDetails>
          The random combination of short and long hydrocarbon chains gives
          rigidity and flexibility resulting higher resistance to external
          damage for superior physical properties. Compression strength,
          elasticity, anti-corrosive and heat resistance properties are the
          factors which make it suitable for potable hot and cold water
          applications.
        </WidgetDetails>

        <WidgetDetails>
          RAKtherm PPR systems are extensively used in food and medical
          industries owing to its harmless and safe properties. Proven to be
          non-toxic and stable chemically even at elevated temperatures.
        </WidgetDetails>

        <Title>
          RAKTHERM PPR PIPING SYSTEMS IS MANUFACTURED IN CONFORMANCE TO DIN
          8077/8078 GERMAN STANDARD.
        </Title>
        <WidgetSubTitle>PPR IS THE PERFECT SOLUTION</WidgetSubTitle>
        <WidgetDetails>
          In accordance with its areas of application, RAKtherm piping systems
          is designed for continuous temperatures of 0°C to 90°C, and short-term
          peak temperatures of up to 100°C with a service life of 50 years.
          Therefore, RAKtherm is the perfect solution for all types of chilled
          and heating water networks.
        </WidgetDetails>
        <WidgetDetails>
          RAKtherm PPR pipes is also very light in weight which is a big
          advantage for installation and handling and its fusion welding
          guarantees perfect seal therefore prevents leakage. Chemical
          components of PPR plastic pipe materials prevent from any bacterial
          growth which makes RAKtherm highly hygienic and non-toxic.
        </WidgetDetails>
      </div>
      <div ref={div2}>
        <WidgetSubTitle>
          RAKTHERM, A HEALTHY CHOICE AND ENVIRONMENT FRIENDLY
        </WidgetSubTitle>
        <WidgetDetails>
          We believe that health is wealth; we never compromise the safety of
          our products. At RAKtherm, we produce products that are safe and
          harmless both for human’s health and environment.
        </WidgetDetails>
        <WidgetDetails>
          PP-R is a material with excellent chemical resistance which does not
          react to most chemicals, with non-corrosive properties, proven to be
          physiologically and microbiologically harmless making it suitable for
          hot and cold water applications. All materials used in piping systems
          are 100% recyclable which can be used again in other plastic products,
          no nickels and chrome which can be found in metal fittings.
        </WidgetDetails>
       
        <Title>2. MULTI-LAYER REINFORCED PVC-U PIPING SYSTEMS</Title>
        <IndentedDetails>
          <WidgetSubTitle>
            <Dot />
            PVC-U REINFORCED PIPES AND FITTINGS ENHANCED SYSTEM (WHITE)
          </WidgetSubTitle>
          <SubTitle>Underground/Aboveground (Solvent Joint)</SubTitle>
          <Details>
            RAKtherm’s product portfolio of wide range of integrated piping
            systems is responsible for delivering technological developments and
            the research & development that leads to innovative pipe systems to
            build the most iconic projects in the world.
          </Details>
        </IndentedDetails>

        <IndentedDetails>
          <WidgetSubTitle>
            <Dot />
            PVC-U REINFORCED PIPES AND FITTINGS INTENSIFED SYSTEM (GRAY)
          </WidgetSubTitle>
          <SubTitle>Aboveground (Solvent Joint)</SubTitle>
          <Details>
            Engineered solution and easy to work on by easing jointing technique
            using the solvent-cement specifically manufactured by RAKtherm to
            complement the complete gray systems which creates a highly-reliable
            piping networks.
          </Details>
        </IndentedDetails>
        <IndentedDetails>
          <WidgetSubTitle>
            <Dot />
            PVC-U REINFORCED PIPES AND FITTINGS INTENSIFED SYSTEM (GRAY)
          </WidgetSubTitle>
          <SubTitle>Aboveground (Push-fit)</SubTitle>
          <Details>
            The intensified PVC-U system of RAKtherm with exceptional
            multi-layer reinforced rubber joint, that can withstand up to 70°C.
            This system can significantly provide seamless water tight
            connection for leak-proof service.
          </Details>
        </IndentedDetails>

        <IndentedDetails>
          <WidgetSubTitle>
            <Dot />
            PVC-U REINFORCED PIPES AND FITTINGS HEIGHTENED SYSTEM (TERRACOTTA
            ORANGE)
          </WidgetSubTitle>
          <SubTitle>Underground (Solvent joint)</SubTitle>
          <Details>
            Engineered solution and easy to work on by easing jointing technique
            using the solvent-cement specifically manufactured by RAKtherm to
            complement the complete orange systems which creates a
            highly-reliable piping networks.
          </Details>
        </IndentedDetails>
        <div ref={div3}></div>
        <IndentedDetails>
          <WidgetSubTitle>
            <Dot />
            PVC-U REINFORCED PIPES AND FITTINGS HEIGHTENED SYSTEM (TERRACOTTA
            ORANGE)
          </WidgetSubTitle>
          <SubTitle>Underground (Push-fit)</SubTitle>
          <Details>
            he intensified PVC-U system of RAKtherm with exceptional multi-layer
            reinforced rubber joint, that can withstand up to 70°C. This system
            can significantly provide seamless water tight connection for
            leak-proof service.
          </Details>
        </IndentedDetails>

        <WidgetSubTitle>
          WHY RAKTHERM DWV (DRAIN, WASTE, VENT) SYSTEMS?
        </WidgetSubTitle>
        <SubTitle style={{ paddingLeft: "0px", marginBottom: "14px" }}>
          Because the RNP Technology in RAKtherm’s Multi-Layer Reinforced PVC-U
          brings technological breakthrough in the piping industry! RAKtherm is
          the very first manufacturer to unveil the secret of the new
          groundbreaking RNP Technology!
        </SubTitle>
        <WidgetDetails>
          DWV Systems (Drain, sewerage, waste, and vent) is the latest
          development of RAKtherm. A state of the art three-layers-pipe with
          solid-wall-construction, made from the new generation premium
          materials which significantly improves its’ durability compared to the
          conventional pipes.
        </WidgetDetails>
      </div>
      <IndentedDetails>
        <WidgetSubTitle style={{ marginBottom: "14px" }}>
          <Dot />
          RAKTHERM’S GROUNDBREAKING RNP TECHNOLOGY
        </WidgetSubTitle>
        <Details>
          The pipes’ uniform middle-layer-construction is based on special cells
          to ensure increased in mechanical properties, wherein the inner-layer
          and outer-layer are combined forming like a ‘sandwich construction’
          which results to exceed the requirement for noise reduction,
          durability, flexibility, and longer-service-life.
        </Details>
      </IndentedDetails>

      <IndentedDetails>
        <WidgetSubTitle style={{ marginBottom: "14px" }}>
          <Dot />
          THE RAREFIED CONCEPT FOR NOISE-REDUCTION TECHNOLOGY OF RAKTHERM
        </WidgetSubTitle>
        <Details>
          RAKtherm launches the newest range of PVC-U piping systems featuring
          its Noise-Reduction Technology. Noise management is one of the crucial
          aspects in the interior design of buildings. As the construction
          technology becomes more complex and more technically demanding, our
          proficiency in pipe engineering can address to resolve the increasing
          demand for customers’ guidelines related to well-being.
        </Details>

        <Details>
          The pipes are made in multi-layer PVC-U for Sound Attenuation System
          technically designed for environmental noise control applications.
          RAKtherm meets the EN 14366 and German standard DIN 4109, confirming
          its high-efficiency in noise reduction in sewage systems.
        </Details>
      </IndentedDetails>

      <IndentedDetails>
        <WidgetSubTitle style={{ marginBottom: "14px" }}>
          <Dot />
          RAKTHERM’S TRIPLE-SEALING-LIP SOLUTIONS, ENGINEERED PERFECTION FOR PVC
          SEWER PIPE SYSTEMS
        </WidgetSubTitle>
        <Details>
          The multi-layer reinforced rubber joint, is an integrated seal for
          plastic pipe systems for aboveground and underground applications of
          drainage sewerage systems.
        </Details>

        <Details>
          RAKtherm’s triple-sealing-lip solutions is now the industry-beating
          performance, it is highly effective seal which requires low-jointing
          force while ensuring a secure seal across wide range of pipe-joint
          level tolerances.
        </Details>

        <Img src="https://www.raktherm.com/assets/images/piping-51n.JPG" />
        <Img src="https://www.raktherm.com/assets/images/piping-52n.JPG" />
      </IndentedDetails>
      <WidgetSubTitle style={{ paddingLeft: "0px", marginBottom: "14px" }}>
        THE CONCEPT OF TRIPLE-SEALING-LIP FROM RAKTHERM
      </WidgetSubTitle>
      <WidgetDetails>
        DIN lock™ is a combined lip and compression seal that is positioned in
        the socket by the pipe manufacturer. The seal is designed to absorb any
        permissible variation in the groove.
      </WidgetDetails>
      <Img src="https://www.raktherm.com/assets/images/piping-61n.jpg" />
      <div ref={div4}></div>
      <IndentedDetails>
        <WidgetSubTitle style={{ marginBottom: "14px" }}>
          <Dot />
          GEOMETRIC DESIGN FOR FUNCTIONALITY
        </WidgetSubTitle>
        <Details>
          The unique design has a flexible thermoplastic elastomeric sealing
          element bonded to a polypropylene retaining ring which holds the seal
          firmly in the correct position during pipe transportation and joint
          assembly.
        </Details>

        <Details>
          RAKtherm triple-sealing-lip seal is designed to have a low assembly
          force in minimum gap and on maximum gap, which is able to have a good
          compression on its 3 different lips. The assembly can be done at
          maximum compression without any problem.
        </Details>
      </IndentedDetails>
      <WidgetTitle>3. PEX PIPING SYSTEMS</WidgetTitle>
      <WidgetDetails>
        PEX refers to cross linked polyethylene (PE-X). It is a polymeric
        material formed by the chemical joining of individual polyethylene
        molecules in a process called “crosslinking”, because cross linking
        alters the performance of the original polyethylene polymer improving
        its’ properties. The primary reason for cross linking the polyethylene
        (PE) is to increase the physical properties and materials’ elevated
        temperature performance under load.
      </WidgetDetails>
      <WidgetDetails>
        This results in a structure that does not soften when high temperature
        is applied, thus raising the thermal stability of the material under
        load, which greatly increases the environmental stress crack resistance,
        resistance to slow crack growth due to deterioration of the material
        under continuous temperature use, chemical resistance, toughness and
        abrasion resistance.
      </WidgetDetails>
      <WidgetSubTitle>
        THE MOLECULE STRUCTURE OF POLYETHYLENE AND CROSS LINKED POLYETHYLENE
      </WidgetSubTitle>
      <div ref={div5}></div>
      <Img
        src="https://www.raktherm.com/assets/images/propexbg.gif"
        style={{ padding: "14px 0px 25px 0px" }}
      />
      <WidgetTitle>4. ANTI-UV PIPING SYSTEMS</WidgetTitle>
      <WidgetSubTitle>
        INTEGRATED WITH ANTI-UV TECHNOLOGY, ENGINEERED FOR HIGHER LEVEL OF
        PIPING SOLUTIONS
      </WidgetSubTitle>
      <WidgetDetails>
        RAKtherm UV systems are integrated with special black anti-UV technology
        for higher resistance against UV rays intended for outdoor applications
        under direct sunlight. It is the safest and longest lasting piping
        solution for outside installation. The revolutionary black anti-UV
        component reduces expansion and contraction proven to be mechanically
        stable even under extreme temperatures of 5°C to 95°C at a service life
        of 50 years.
      </WidgetDetails>
      <div ref={div6}></div>
      <WidgetDetails>
        The creation of RAKtherm anti-UV fittings came up to provide a complete
        line up of piping solutions excellent for outdoor installations.
        RAKtherm is noted as one of the very first manufacturer of anti-UV
        fittings that has been registered in SKZ affirming it’s conformance to
        the highest standard of quality. RAKtherm being the leader and
        innovator, will now complete and represent the entire selection of
        anti-UV piping systems in the market; this will administer a full
        network of anti-UV pipeline solution under direct and exposed
        applications.
      </WidgetDetails>

      <WidgetTitle>5. REINFORCED PIPING SYSTEMS</WidgetTitle>
      <IndentedDetails>
        <WidgetSubTitle>
          <Dot />
          RAKTHERM REINFORCED STABI (RRS SYSTEM)
        </WidgetSubTitle>
        <Details>
          The main function is to stabilize the pipes to preserve its quality.
          RAKtherm Reinforced Stabi Pipes are manufactured from special
          component of PPR material reinforced with aluminum layer for reduced
          linear expansion similar to metal pipes for greater strength and
          better heat resistance. Highly efficient with smooth interior walls
          that reduces the head loss for increased higher flow rates.
        </Details>
        <Details>
          The inner part is covered with aluminum; outer layer is coated with
          anti-creep layer; the outer layer is coated with PPR as mechanical
          protection, combined with hot-melt glue between the layers. All these
          provide better anti-creep properties, greater strength, better shock
          resistance, and good stability. It can be easily detected with metal
          detector even when buried under ground. With proven high resilience
          performance even at the most extreme conditions, making it suitable
          for hot and cold water applications in residential, commercial, and
          industrial facilities.
        </Details>
      </IndentedDetails>

      <IndentedDetails>
        <WidgetSubTitle>
          <Dot />
          RAKTHERM REINFORCED STABI WITH UV PROTECTION (RRSV SYSTEM)
        </WidgetSubTitle>
        <Details>
          RAKtherm’s Reinforced Stabi UV Pipes are enhanced with anti-radiation
          external black aluminum layer, a UV-resistant component making it more
          durable and suitable for exposed and open air piping installations
          even under direct sunlight.
        </Details>
        <Details>
          With notable decreased linear expansion rate by 75%, and 20% increased
          higher flow rate. The exceptional anti-UV properties is tested and
          proven to be excellent in ultimate piping network performance for
          diverse applications.
        </Details>
      </IndentedDetails>

      <IndentedDetails>
        <WidgetSubTitle>
          <Dot />
          RAKTHERM REINFORCED FIBER (RRF SYSTEM)
        </WidgetSubTitle>
        <Details>
          One of the hindrances in using plastic material including PP-R pipes
          is the possibility to expand drastically when exposed to heat, we have
          developed RAKtherm Reinforced Fiber Pipes – a unique recipe of glass
          fiber layers; with innovative component of PPR and glass fiber in
          order to decrease linear expansion up to 70%. This makes the welding
          processes easier which requires lower supports, saving on installation
          time and effort.
        </Details>
      </IndentedDetails>

      <IndentedDetails>
        <WidgetSubTitle>
          <Dot />
          RAKTHERM REINFORCED FIBER WITH UV PROTECTION (RRFV SYSTEM)
        </WidgetSubTitle>
        <Details>
          A unique 4-layers pipe with glass fiber core layer and UV treatment
          skin outer layer for premium anti-UV protection. Mechanically stable
          being integrated with aluminum and external UV for maximum piping
          performance. 70% decrease linear expansion as compared to other pipes,
          and increased higher flow rate by 20%.
        </Details>
        <Details>
          The inner part is covered with aluminum; outer layer is coated with
          anti-creep layer; the outer layer is coated with PPR as mechanical
          protection, combined with hot-melt glue between the layers. All these
          provide better anti-creep properties, greater strength, better shock
          resistance, and good stability. It can be easily detected with metal
          detector even when buried under ground. With proven high resilience
          performance even at the most extreme conditions, making it suitable
          for hot and cold water applications in residential, commercial, and
          industrial facilities.
        </Details>
      </IndentedDetails>
    </>
  );
};

export default PipingTechnologies;
