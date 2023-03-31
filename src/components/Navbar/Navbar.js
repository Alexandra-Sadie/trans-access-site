import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import { useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import { routingObject } from "../../routing";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  // *STATE ZONE
  const [anchorElNav, setAnchorElNav] = useState(null);

  // *FUNCTION ZONE
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // *RETURN
  return (
    //   {/* AppBar implies bar at top of application while Toolbar implies
    // list of utility/navigation links */}
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
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
