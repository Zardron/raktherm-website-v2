import jwtDecode from "jwt-decode";

const useAuth = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwtDecode(token);
    const { firstname } = decoded.UserInfo;

    console.log("decoded", decoded.UserInfo);

    return { firstname };
  }

  return { firstname: "" };
};
export default useAuth;
