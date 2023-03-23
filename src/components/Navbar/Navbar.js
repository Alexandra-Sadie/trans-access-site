import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    //   {/* AppBar implies bar at top of application while Toolbar implies
    // list of utility/navigation links */}
    // TODO: Spacing below appbar
    <AppBar position="sticky">
      <Toolbar>
        <IconButton color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
