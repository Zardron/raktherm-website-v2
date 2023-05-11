import jwtDecode from "jwt-decode";

const useAuth = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwtDecode(token);
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
    } = decoded.UserInfo;

    return {
      active,
      companyName,
      country,
      email,
      firstname,
      lastname,
      phoneNumber,
      picture,
      position,
    };
  }

  return {
    active: false,
    companyName: "",
    country: "",
    email: "",
    firstname: "",
    lastname: "",
    phoneNumber: "",
    picture: "",
    position: "",
  };
};
export default useAuth;
