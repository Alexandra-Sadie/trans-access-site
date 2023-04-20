// !IMPORT ZONE
import HamburgerIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu } from "@mui/material";
import { routingObject } from "../../../routing";
import HamburgerLink from "./HamburgerLink";

const HamburgerMenu = ({
  // TODO why these are being passed
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
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
        // TODO explain anchorEl, anchorOrigin, keepMounted
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
        // TODO improve^
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
  );
};
export default HamburgerMenu;
