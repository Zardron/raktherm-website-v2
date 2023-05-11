import React from "react";
import { SignUp, Topbar, TopBarContainer } from "../assets/styled/TopbarStyle";
import useAuth from "../redux/hooks/useAuth";
import { useSendLogoutMutation } from "../redux/slice/api/authApiSlice";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const TopBar = () => {
  const [sendLogout] = useSendLogoutMutation();

  const handleLogout = () => {
    localStorage.clear();
    sendLogout();
  };

  const data = useAuth();

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
  } = data;

  return (
    <Topbar>
      <TopBarContainer>
        {firstname ? (
          <>
            <SignUp to={"/dashboard/home"} style={{ marginRight: "5px" }}>
              {" "}
              Welcome: {firstname}
            </SignUp>
            <SignUp style={{ marginRight: "5px" }}>
              <MdKeyboardDoubleArrowRight />
            </SignUp>
            <SignUp
              to={"/account"}
              onClick={handleLogout}
              style={{ color: "#e10f0f" }}
            >
              Logout
            </SignUp>
          </>
        ) : (
          <SignUp to={"/account"}>Sign up to Join My RAKtherm</SignUp>
        )}
      </TopBarContainer>
    </Topbar>
  );
};

export default TopBar;
