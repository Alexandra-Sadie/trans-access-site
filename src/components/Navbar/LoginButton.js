import { useContext } from "react";
import { UserLoggedInContext } from "../../providers/UserLoggedInProvider";
import { Button, Stack } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { routingObject } from "../../routing";

const LoginButton = () => {
  const { isUserLoggedIn, logOut } = useContext(UserLoggedInContext);
  const navigate = useNavigate();
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
            to={routingObject.my_account.route}
          >
            My Account
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: { sm: "small", md: "medium" },
            }}
            onClick={() => {
              logOut();
              setTimeout(() => {
                navigate(routingObject.main.route);
              }, 300);
            }}
          >
            Log Out
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: { sm: "small", md: "medium" },
          }}
          component={RouterLink}
          to={routingObject.login_signup.route}
        >
          Log In
        </Button>
      )}
    </Stack>
  );
};
export default LoginButton;
