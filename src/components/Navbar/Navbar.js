import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import { routingObject } from "../../routing";

const NavbarButton = ({ route, title }) => {
  return (
    <Button
      variant="text"
      sx={{ color: "#fff" }}
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
        <Stack direction="row" spacing={2}>
          {
            // this returns an array of each route sub-object of routingObject
            // these are expected to be of structure {route: string, title: string}
            Object.values(routingObject)
              // this takes said sub-objects and renders them as buttons
              .map(({ route, title }) => (
                <NavbarButton key={route} route={route} title={title} />
              ))
          }
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
