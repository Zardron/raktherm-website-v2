import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopBarContainer = styled.div`
  width: 1270px;
  padding: 5px 10px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Topbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #949494;
`;

export const SignUp = styled(Link)`
  color: white;
  float: right;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
