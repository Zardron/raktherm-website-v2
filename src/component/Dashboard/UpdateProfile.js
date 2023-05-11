import React from "react";
import styled from "styled-components";
import useAuth from "../../redux/hooks/useAuth";
import { InputField } from "../../assets/styled/AccountStyle";

const WidgetDetails = styled.div`
  text-align: justify;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 25px;
  color: #61728d;
`;

const Label = styled.div`
  text-align: justify;
  font-weight: 500;
  font-size: 14px;
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

export const Button = styled.button`
  padding: 7px 15px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  color: white;
  background-color: #008053;
  text-transform: uppercase;
  margin-bottom: 50px;
  border: 2px solid #008053;

  :hover {
    color: #008053;
    background-color: white;
    border: 2px solid #008053;
  }
`;

const UpdateProfile = () => {
  const {
    active,
    companyName,
    country,
    email,
    firstname,
    lastname,
    phoneNumber,
    picture,
    position,
  } = useAuth();

  return (
    <>
      <Title>
        WELCOME {firstname} {lastname}
      </Title>
      <WidgetDetails>
        Now in RAKtherm we create your own zone, where you can share your sucess
        and challenges you've been through in your plumbing experience.
      </WidgetDetails>
      <WidgetDetails>
        We believe that your special moments deserve recognition that got to be
        shared to the Global MEP Community.
      </WidgetDetails>
      <WidgetDetails>
        Interact with your fellow technician, And see if we were able to help
        you through our training with RAKtherm Global Academy.
      </WidgetDetails>
      <WidgetDetails>
        Cause here in RAKtherm we are not just a Manufacturer, or Business. We
        are community that shares and celebrates successes and support your
        personal plumbing skills
      </WidgetDetails>

      <hr></hr>

      <Title style={{ marginTop: "25px" }}>PROFILE DETAILS</Title>
      <div style={{ display: "flex" }}>
        <div style={{ flexDirection: "column", paddingRight: "10px", flex: 1 }}>
          <Label>Firstname</Label>
          <InputField style={{ marginBottom: "15px" }} value={firstname} />

          <Label>Email</Label>
          <InputField style={{ marginBottom: "15px" }} value={email} />

          <Label>Company Name</Label>
          <InputField style={{ marginBottom: "15px" }} value={companyName} />

          <Label>Country</Label>
          <InputField style={{ marginBottom: "15px" }} value={country} />
        </div>
        <div style={{ flexDirection: "column", paddingLeft: "10px", flex: 1 }}>
          <Label>Lastname</Label>
          <InputField style={{ marginBottom: "15px" }} value={lastname} />

          <Label>Phone Number</Label>
          <InputField style={{ marginBottom: "15px" }} value={phoneNumber} />

          <Label>Position</Label>
          <InputField style={{ marginBottom: "15px" }} value={position} />

          <Button style={{ marginTop: "22px" }}>SAVE PROFILE</Button>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
