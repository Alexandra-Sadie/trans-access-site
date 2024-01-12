// !IMPORT ZONE
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

// ? should we make a generic button component w variants?

const DesktopNavButton = ({ route, title }) => {
  return (
    // minor note, this is the MUI-specific Button component
    // docs: https://mui.com/material-ui/react-button/
    <Button
      variant="text"
      sx={{ color: "primary.contrastText" }}
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

export default DesktopNavButton;
