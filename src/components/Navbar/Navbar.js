// !IMPORT ZONE
import { AppBar, Toolbar } from "@mui/material";
import { useState } from "react";
// our components
import DesktopNavLinks from "./DesktopNavLinks/DesktopNavLinks";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  // *STATE ZONE
  // we handle the hamburger dropdown menu by anchoring the menu to the hamburger icon when the hamburger is clicked on. (when the menu has no anchor it doesn't appear)
  // this state is used to monitor what html element the menu is anchoring to, if any (should only ever be the burger)
  const [anchorElNav, setAnchorElNav] = useState(null);

  // *FUNCTION ZONE
  // this function expects to receive a click event & is called in the onClick of the hamburger icon
  // when this function runs, it will set the anchor of the dropdown menu to the clicked element (the burger)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // this fn is called when the dropdown menu is closed, using MUI's onClose trigger that it provides attached to the Menu component
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // *RETURN
  return (
    // AppBar implies a bar at top of application while Toolbar implies a list of utility/navigation links -- we have a Toolbar nested INSIDE an AppBar bc it's a list of links placed at the top of the app :)
    // Stack Overflow comment explaining this: https://stackoverflow.com/a/61145181
    // the position="sticky" forces the AppBar to take space in the pageflow so it doesn't float over content (but still stays on top when you scroll)

    // MUI AppBar docs: https://mui.com/material-ui/react-app-bar/
    // MUI Toolbar docs: https://mui.com/material-ui/api/toolbar/
    <AppBar position="sticky">
      <Toolbar>
        {/* // ? mb put the sx breakpoints css here in these elements to make it self-commenting */}
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
