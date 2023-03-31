import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Menu, Stack, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

import { routingObject } from "../../routing";
import HamburgerLink from "./HamburgerMenu";
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
    //   AppBar implies bar at top of application while Toolbar implies
    // list of utility/navigation links
    <AppBar position="sticky">
      <Toolbar>
        <Box
          // the below shows the hanburger menu at smaller (i.e. mobile) views and hides it at medium and above
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
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
            // this is true if anchorElNav has a value
            // and false if it is null
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {
              // this returns an array of each route sub-object of routingObject
              // these are expected to be of structure {route: string, title: string}
              Object.values(routingObject)
                // this takes said sub-objects and renders them as typographical links in the menu
                .map(({ route, title }) => (
                  <HamburgerLink key={route} route={route} title={title} />
                ))
            }
          </Menu>
        </Box>

        {/* Stack is a Box/div that automatically is a flex container */}
        <Stack
          direction="row"
          spacing={2}
          // this hides on mobile breakpoints
          // and grants its default display, flex, on
          // desktop breakpoint
          // note: I THINK that its default display is flex
          sx={{ display: { xs: "none", md: "flex" } }}
        >
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
