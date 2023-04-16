import React from "react";
import {
  WidgetDetails,
  Title,
  InputField,
  TextArea,
  Button,
  Captcha,
  CaptchaContainer,
  RefreshButton,
  RefreshIcon,
} from "../../assets/styled/RakthermWorldwide";

const BecomeStockist = () => {
  return (
    <>
      <Title>BECOME A RAKTHERM GLOBAL STOCKIST</Title>

      <WidgetDetails>
        At RAKtherm we support our valued Stockist, aiming to achieve
        partnership success. Having a mutual business goals and objectives are
        vital to our team to share the same vision. Our strategy seeks to
        reinforce our leadership position in the world of pipe engineering.
      </WidgetDetails>
      <WidgetDetails>
        Our business specialists are ready to assist you in escalating the
        growth of and expansion of your business… Fill up the form now!
      </WidgetDetails>

      <InputField placeholder="Name" />
      <InputField placeholder="Designation" />
      <InputField placeholder="Company" />
      <InputField placeholder="Address" />
      <InputField placeholder="Telephone No" />
      <InputField placeholder="Mobile No" />
      <InputField placeholder="Email" />
      <InputField placeholder="Current Products" />
      <InputField placeholder="Company Revenue" />
      <InputField placeholder="Purchase Power" />
      <InputField placeholder="RAKtherm Piping System Interest" />
      <TextArea placeholder="Other Queries" rows={5} />
      <CaptchaContainer>
        <Captcha>44A7xb</Captcha>
        <RefreshButton>
          <RefreshIcon />
        </RefreshButton>
      </CaptchaContainer>
      <InputField placeholder="Enter Captcha Here" />
      <Button>Submit</Button>
    </>
  );
};

export default BecomeStockist;
