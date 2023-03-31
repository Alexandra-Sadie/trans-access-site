import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  // Button,
  IconButton,
  Menu,
  Stack,
  Toolbar,
} from "@mui/material";
import { useState } from "react";

// import { Link as RouterLink } from "react-router-dom";

import { routingObject } from "../../routing";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  // *STATE ZONE
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // *FUNCTION ZONE
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setIsOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setIsOpen(false);
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

        {/* COPY PASTE ZONE BELOW */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={isOpen}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <p>wahoo</p>
        </Menu>

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
