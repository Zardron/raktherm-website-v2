import styled from "styled-components";

const WidgetDetails = styled.div`
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

const Image = styled.img`

`

const Certifications = () => {
  return (
    <>
      <Title>Certifications</Title>
      <WidgetSubTitle>EXTENSIVE PRODUCT TESTING AND EVALUATION</WidgetSubTitle>
      <WidgetDetails>
        Testing and evaluation is absolutely necessary for us to obtain product
        optimization. Achieving a clear-cut product superiority to ensure brand
        share dominancy in the industry and establish customer loyalty.
      </WidgetDetails>

      <Title>
        RAKTHERM CERTIFICATION CONFORMS TO GERMAN QUALITY STANDARD COMPRISES OF:
      </Title>
      <WidgetSubTitle>GERMAN ENGINEERING MACHINERIES</WidgetSubTitle>
      <WidgetDetails>
        We are equipped with German engineering machineries with
        state-of-the-art technology. Our product innovation brings technological
        advancement in the piping industry. Modern technology in our operation
        is a growing necessity because it gives us new and better approach to
        provide faster, more convenient and more efficient way to manufacture
        products. Through this, productivity reaches a higher level allowing for
        better products produced and faster services delivered to our increasing
        customers. RAKtherm’s German machineries made it possible to have wider
        reach in the global market.
      </WidgetDetails>

      <WidgetSubTitle>TESTING AND CONFORMITY</WidgetSubTitle>
      <WidgetDetails>
        Being customer-focused industry, our piping systems undergoes critical
        product testing to achieve product superiority by intensively monitoring
        the quality. The areas of our concern are the consumers – their health,
        product safety, and environment. For this reason, we require testing for
        conformance with specifications and compliance for safety and other
        standardization regulations. We ensure that each product meets relevant
        design that gains consumer’s confidence over RAKtherm products.
      </WidgetDetails>

      <WidgetSubTitle>GERMAN QUALIFICATION AND CERTIFICATION</WidgetSubTitle>
      <WidgetDetails>
        Tested, conformed, qualified, and certified by CSTB, DVGW, HY, SKZ,
        CARSO, & TUV, conforming to the German standard of 8077/8078. RAKTherm
        has passed the quality assurance and quality performance tests to ensure
        that our products are suitable for global distribution and utilization.
      </WidgetDetails>

      <Image src="https://www.raktherm.com/assets/images/2q-logos.jpg"/>
    </>
  );
};

export default Certifications;
