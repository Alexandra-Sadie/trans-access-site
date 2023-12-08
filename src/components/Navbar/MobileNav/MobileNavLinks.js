// !IMPORT ZONE
import HamburgerIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu } from "@mui/material";
import MobileNavButton from "./MobileNavButton";
import { useState } from "react";

const MobileNavLinks = ({ navRoutesArray }) => {
  // *STATE ZONE
  // we handle the hamburger dropdown menu by anchoring the menu to the hamburger icon when the hamburger (ie IconButton component) is clicked on. (when the menu has no anchor it doesn't appear)
  // this state is used to monitor what html element the menu is anchoring to, if any (should only ever be the burger IconButton)
  const [anchorElNav, setAnchorElNav] = useState(null);

  // *FUNCTION ZONE
  // this function expects to receive a click event & is called in the onClick of the IconButton
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
    <Box
      // the below shows the hamburger menu at smaller (i.e. mobile) views and hides it at medium and above
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      {/* IconButton is an MUI element that simply wraps any MUI Icon and makes it a clickable button
      
      docs: https://mui.com/material-ui/api/icon-button/
      */}
      <IconButton
        color="inherit"
        // TODO ACCESIBILITY - determine if these aria notes are correct - they are taken copy-paste from MUI docs example
        // in theory these are for screen readers and other accesibility devices
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <HamburgerIcon />
      </IconButton>

      {/* Menu is an MUI component to generate a temporary menu - in this case a floating dropdown menu when the user clicks the HamburgerIcon above.

      docs: https://mui.com/material-ui/react-menu/
      
      this code is partially copied from this example of a responsive menu in the MUI docs https://mui.com/material-ui/api/icon-button/ but we have altered it since then   */}
      <Menu
        // accessibility: this id is neccesary for aria-controls="menu-appbar" in the IconButton above
        id="menu-appbar"
        // as noted in State Zone above, this tells the Menu which element to anchor itself to
        anchorEl={anchorElNav}
        // this sets what corner of the icon the menu anchors to
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        // ? this seems to do some performance thing is it useful enough to keep
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        // Boolean() returns true if anchorElNav has content (i.e. the IconButton has been clicked and so handleOpenNavMenu has been called) and false if anchorElNav is null (i.e. on application start or if handleCloseNavMenu has been called)
        // this is considered derived state
        //
        // then, if it returns true, the Menu is open, i.e. visible, if it returns false, the menu is not visible
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {navRoutesArray
          // this takes said sub-objects and renders them as typographical links in the menu
          .map(({ route, title }) => (
            <MobileNavButton key={route} route={route} title={title} />
          ))}
      </Menu>
    </Box>
  );
};
export default MobileNavLinks;
