import MenuIcon from "@mui/icons-material/Menu";

import { Box, IconButton, Menu } from "@mui/material";
import { routingObject } from "../../../routing";
import HamburgerLink from "./HamburgerLink";

const HamburgerMenu = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
  return (
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

      {/* COPY PASTE ZONE BELOW todo from where*/}
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
  );
};
export default HamburgerMenu;
