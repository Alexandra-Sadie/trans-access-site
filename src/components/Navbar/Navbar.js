import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Menu, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

import { routingObject } from "../../routing";
import HamburgerLink from "./HamburgerMenu/HamburgerLink";
import DesktopNavLinks from "./DesktopNavLinks/DesktopNavLinks";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

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
        <HamburgerMenu
          anchorElNav={anchorElNav}
          handleOpenNavMenu={handleOpenNavMenu}
          handleCloseNavMenu={handleCloseNavMenu}
        />
        <DesktopNavLinks />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
