import styled from "styled-components";
import { ImFilePdf } from "react-icons/im";
import { CATALOGUES } from "../../assets/data/CatalogueData";
import { Link } from "react-router-dom";

const WidgetDetails = styled.div`
text-align: justify;
font-weight: 500;
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

const SubTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
  margin-bottom: 20px;
  color: #61728d;
`;

const PDF = styled(ImFilePdf)`
  color: #ff3c00;
  font-size: 18px;
  margin-right: 20px;
`;

const PDFButton = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  height: 50px;
  padding: 0 30px;
  text-align: left;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: #61728d;
  border: 1px solid #d3dbe4;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  cursor: pointer;

  :hover {
    color: #008053;
    border-color: #ffffff;
    background-color: #ffffff;
    box-shadow: 3px 5px 15px 0 rgba(0, 0, 0, 0.15);

    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
`;

const CataloguesAndDownloads = () => {
  const loggedIn = false;

  return (
    <>
      <Title>CATALOGUES & DOWNLOADS</Title>
      <WidgetDetails>
        RAKtherm catalogue is your guide in our piping systems, an engineer’s
        reliable reference that contains relevant information and specifications
        including suitable applications.
      </WidgetDetails>

      <SubTitle>
        <strong>Kindly register to download the catalogues</strong>
      </SubTitle>

      {CATALOGUES.map((data) => (
        <PDFButton to={loggedIn ? "/profile" : "/account"}>
          <PDF />
          {data.name}
        </PDFButton>
      ))}
    </>
  );
};

export default CataloguesAndDownloads;
