import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Button, Stack } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { routingObject } from "../../../routing";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

// ? i'd be open to a better name for this
const NavUserButtons = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={2}>
      <Button sx={{ color: "primary.contrastText" }}>
        <PersonOutlineOutlinedIcon />
      </Button>
      {user ? (
        <>
          {/* TODO - break these individual buttons into components in some elegant way */}
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
              // this mocks in server logging out time to test app interactions
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
export default NavUserButtons;
