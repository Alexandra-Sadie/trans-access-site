import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { IconButton, Menu, MenuItem, Box } from "@mui/material";
// We're importing react-router's Link as RouterLink to avoid namespace confusion with MUI's Link component. See our readme for more information on this :)
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { routingObject } from "../../../routing";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

// ? i'd be open to a better name for this
const NavUserButtons = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // *STATE ZONE
  // we handle the hamburger dropdown menu by anchoring the menu to the hamburger icon when the hamburger (ie IconButton component) is clicked on. (when the menu has no anchor it doesn't appear)
  // this state is used to monitor what html element the menu is anchoring to, if any (should only ever be the burger IconButton)
  const [anchorElAcct, setAnchorElAcct] = useState(null);

  // *FUNCTION ZONE
  // this function expects to receive a click event & is called in the onClick of the IconButton
  // when this function runs, it will set the anchor of the dropdown menu to the clicked element (the burger)
  const handleOpenAcctMenu = (event) => {
    setAnchorElAcct(event.currentTarget);
  };

  // this fn is called when the dropdown menu is closed, using MUI's onClose trigger that it provides attached to the Menu component
  const handleCloseAcctMenu = () => {
    setAnchorElAcct(null);
  };
  return (
    <>
      {/* IconButton is an MUI element that simply wraps any MUI Icon and makes it a clickable button
      
      docs: https://mui.com/material-ui/api/icon-button/
      */}
      <IconButton
        sx={{ color: "primary.contrastText" }}
        color="inherit"
        // TODO ACCESIBILITY - determine if these aria notes are correct - they are taken copy-paste from MUI docs example
        // in theory these are for screen readers and other accesibility devices
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenAcctMenu}
      >
        <PersonOutlineOutlinedIcon />
      </IconButton>
      {/* Menu is an MUI component to generate a temporary menu - in this case a floating dropdown menu when the user clicks the HamburgerIcon above.

      docs: https://mui.com/material-ui/react-menu/
      
      this code is partially copied from this example of a responsive menu in the MUI docs https://mui.com/material-ui/api/icon-button/ but we have altered it since then   */}
      <Menu
        // accessibility: this id is neccesary for aria-controls="menu-appbar" in the IconButton above
        id="menu-appbar"
        // as noted in State Zone above, this tells the Menu which element to anchor itself to
        anchorEl={anchorElAcct}
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
        open={Boolean(anchorElAcct)}
        onClose={handleCloseAcctMenu}
      >
        {user ? (
          // MUI is unhappy if this renders as a fragment
          <Box>
            {/* TODO - break these individual buttons into components in some elegant way */}
            <MenuItem
              variant="contained"
              sx={{
                color: "text.primary",
                fontSize: { sm: "small", md: "medium" },
              }}
              component={RouterLink}
              to={routingObject.my_account.route}
            >
              My Account
            </MenuItem>
            <MenuItem
              variant="contained"
              sx={{
                color: "text.primary",
                fontSize: { sm: "small", md: "medium" },
              }}
              onClick={() => {
                logOut();
                // this mocks in server logging out time to test app interactions
                setTimeout(() => {
                  navigate(routingObject.main.route);
                }, 300);
              }}
            >
              Log Out
            </MenuItem>
          </Box>
        ) : (
          <MenuItem
            variant="contained"
            sx={{
              fontSize: { sm: "small", md: "medium" },
              color: "text.primary",
            }}
            component={RouterLink}
            to={routingObject.login_signup.route}
          >
            Log In
          </MenuItem>
        )}
      </Menu>
    </>
  );
};
export default NavUserButtons;
