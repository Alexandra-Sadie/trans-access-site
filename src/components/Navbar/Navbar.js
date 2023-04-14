// !IMPORT ZONE
import { AppBar, Toolbar } from "@mui/material";
import { useState } from "react";
// our components
import DesktopNavLinks from "./DesktopNavLinks/DesktopNavLinks";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

// TODO explain the navbar philosophy
const Navbar = () => {
  // *STATE ZONE
  // TODO what this state does
  const [anchorElNav, setAnchorElNav] = useState(null);

  // *FUNCTION ZONE
  // TODO how this works to actually open it
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // TODO likewise to close
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // *RETURN
  return (
    //   AppBar implies bar at top of application while Toolbar implies
    // list of utility/navigation links
    // todo link to stackoverflow post about this -- explain position sticky also
    <AppBar position="sticky">
      <Toolbar>
        {/* //TODO mb put the sx breakpoints css here in these elements to make it self-commenting */}
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
