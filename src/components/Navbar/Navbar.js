import { AppBar, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    // AppBar implies bar at top of application while Toolbar implies
    // list of utility/navigation links
    <AppBar position="sticky">
      <Toolbar></Toolbar>
    </AppBar>
  );
};
export default Navbar;
