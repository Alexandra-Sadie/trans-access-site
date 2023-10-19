import { useContext } from "react";
import { UserLoggedInContext } from "../../providers/UserLoggedInProvider";
import { Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const LoginButton = () => {
  const { isUserLoggedIn, logIn, logOut } = useContext(UserLoggedInContext);
  return (
    <Stack direction="row" spacing={2}>
      {isUserLoggedIn ? (
        <>
          <Button
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: { sm: "small", md: "medium" },
            }}
            component={RouterLink}
          >
            My Account
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: { sm: "small", md: "medium" },
            }}
            onClick={logOut}
          >
            Log Out
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: { sm: "small", md: "medium" },
            }}
            onClick={logIn}
          >
            Log In
          </Button>
        </>
      )}
    </Stack>
  );
};
export default LoginButton;
