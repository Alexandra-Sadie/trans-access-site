import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  // Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import { routingObject } from "../../routing";
import NavbarButton from "./NavbarButton";

const HamburgerLink = ({ route, title }) => (
  <MenuItem>
    {/* i am winging that this is the most semantic and accessible approach but it seems right */}
    <Link sx={{ textDecoration: "none" }} to={route} component={RouterLink}>
      <Typography textAlign="center">{title}</Typography>
    </Link>
  </MenuItem>
);

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
          // this is true if anchorElNav has a value
          // and false if it is null
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          // the below will be useful to hide the menu
          // confidently on desktop view but not for now
          // sx={{
          //   display: { xs: "block", md: "none" },
          // }}
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

        {/* Stack is a Box/div that automatically is a flex container */}
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
