import { useContext } from "react";
import { UserLoggedInContext } from "../../providers/UserLoggedInProvider";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { isUserLoggedIn, logIn, logOut } = useContext(UserLoggedInContext);
  return (
    <Button
      variant="contained"
      sx={{
        color: "#fff",
        fontSize: { sm: "small", md: "medium" },
      }}
      onClick={isUserLoggedIn ? logOut : logIn}
    >
      {isUserLoggedIn ? "Log Out" : "Log In"}
    </Button>
  );
};
export default LoginButton;
