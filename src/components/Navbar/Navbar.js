// !IMPORT ZONE
import { AppBar, Box, Toolbar } from "@mui/material";
// our components
import DesktopNavLinks from "./DesktopNavLinks/DesktopNavLinks";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    // AppBar implies a bar at top of application while Toolbar implies a list of utility/navigation links -- we have a Toolbar nested INSIDE an AppBar bc it's a list of links placed at the top of the app :)
    // Stack Overflow comment explaining this: https://stackoverflow.com/a/61145181
    // the position="sticky" forces the AppBar to take space in the pageflow so it doesn't float over content (but still stays on top when you scroll)

    // MUI AppBar docs: https://mui.com/material-ui/react-app-bar/
    // MUI Toolbar docs: https://mui.com/material-ui/api/toolbar/
    <AppBar position="sticky">
      <Toolbar>
        {/* // ? mb put the sx breakpoints css here in these elements to make it self-commenting */}
        <Box sx={{ flexGrow: 1 }}>
          {/* this is visible on mobile breakpoints */}
          <HamburgerMenu />
          {/* this is visible on desktop breakpoint */}
          <DesktopNavLinks />
        </Box>
        {/* for UI development this is one Button with ternaries in it - we may want a ternary between two buttons */}
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
