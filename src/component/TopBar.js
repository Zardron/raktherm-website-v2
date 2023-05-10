import React from "react";
import { SignUp, Topbar, TopBarContainer } from "../assets/styled/TopbarStyle";
import useAuth from "../redux/hooks/useAuth";
import { useSendLogoutMutation } from "../redux/slice/api/authApiSlice";

const TopBar = () => {
  const [sendLogout] = useSendLogoutMutation();

  const handleLogout = () => {
    localStorage.clear();
    sendLogout();
  };

  const data = useAuth();

  const { firstname } = data;

  return (
    <Topbar>
      <TopBarContainer>
        {firstname ? (
          <>
            <SignUp
              to={"/account"}
              onClick={handleLogout}
              style={{ color: "red" }}
            >
              {" "}
              Logout
            </SignUp>
            <SignUp style={{ marginRight: "25px" }}>
              {" "}
              Welcome: {firstname}
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
