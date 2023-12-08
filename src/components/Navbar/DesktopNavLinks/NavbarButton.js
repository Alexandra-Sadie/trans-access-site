// !IMPORT ZONE
import { Button } from "@mui/material";
// TODO extract to readme
// Link imported from "react-router-dom" is a React Router component that acts as an anchor link (wow!) to other routes (pages). HOWEVER because MUI ALSO has a component called Link, used to style anchor text, we import it as RouterLink across the entire project to avoid namespace confusion. This is MUI recommended practice.
// React Router Link docs: https://reactrouter.com/en/main/components/link
// MUI routing/link docs: https://mui.com/material-ui/guides/routing/
import { Link as RouterLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

// ? should we make a generic button component w variants?

const NavbarButton = ({ route, title }) => {
  return (
    // minor note, this is the MUI-specific Button component
    // docs: https://mui.com/material-ui/react-button/
    <Button
      variant="text"
      sx={{ color: "#fff" }}
      to={route}
      // NavLink is a react router-provided component that works as a link but knows whether it is "active" or not
      component={NavLink}
      // we use this to style the navlink button for the active page
      style={({ isActive }) => {
        return isActive ? { backgroundColor: "rgba(255,255,255,0.25)" } : {};
      }}
    >
      {title}
    </Button>
  );
};

export default NavbarButton;
