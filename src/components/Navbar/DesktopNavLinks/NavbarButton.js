// !IMPORT ZONE
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// ? should we make a generic button component w variants?

const NavbarButton = ({ route, title }) => {
  return (
    // TODO link to button docs cuz why not
    <Button
      variant="text"
      sx={{ color: "#fff" }}
      to={`${route}`}
      // TODO clarify routerlink
      component={RouterLink}
    >
      {`${title}`}
    </Button>
  );
};

export default NavbarButton;
