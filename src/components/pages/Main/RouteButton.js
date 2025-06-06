// !IMPORT ZONE
// We're importing react-router's Link as RouterLink to avoid namespace confusion with MUI's Link component. See our readme for more information on this :)
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

// ? should we make a generic button component w variants?

const RouteButton = ({ route, title }) => {
  return (
    // minor note, this is the MUI-specific Button component
    // docs: https://mui.com/material-ui/react-button/
    <Button
      variant="contained"
      sx={{ minWidth: "100%" }}
      to={route}
      // see above on why this is RouterLink
      component={RouterLink}
    >
      {title}
    </Button>
  );
};

export default RouteButton;
