import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const NavbarButton = ({ route, title }) => {
  return (
    <Button
      variant="text"
      // sx={{ minWidth: "200px" }}
      to={`${route}`}
      component={RouterLink}
    >
      {`${title}`}
    </Button>
  );
};

const Navbar = () => {
  return (
    //   {/* AppBar implies bar at top of application while Toolbar implies
    // list of utility/navigation links */}
    <AppBar position="sticky">
      <Toolbar>
        <IconButton color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Stack direction="row" spacing={2}></Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
