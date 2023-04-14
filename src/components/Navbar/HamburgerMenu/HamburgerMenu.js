// !IMPORT ZONE
import MenuIcon from "@mui/icons-material/Menu";
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
      <IconButton
        // TODO link to docs
        color="inherit"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        {/* //TODO link to docs for menuicon
        // ? mb rename? to be more contextually self documenting  */}
        <MenuIcon />
      </IconButton>

      {/* COPY PASTE ZONE BELOW 
      // todo pasted from where, note we modified it (how?)*/}
      <Menu
        // TODO reevaluate if we keep this ID???
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
