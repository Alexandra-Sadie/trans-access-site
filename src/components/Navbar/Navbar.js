import { AppBar, Toolbar } from "@mui/material";
import { useState } from "react";

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
    // todo link so post about this
    <AppBar position="sticky">
      <Toolbar>
        {/* this is visible on mobile breakpoints */}
        <HamburgerMenu
          anchorElNav={anchorElNav}
          handleOpenNavMenu={handleOpenNavMenu}
          handleCloseNavMenu={handleCloseNavMenu}
        />
        {/* this is visible on desktop breakpoint */}
        <DesktopNavLinks />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
