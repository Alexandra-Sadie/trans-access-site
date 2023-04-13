// !IMPORT ZONE
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

// ? should we make a generic button component w variants?

const RouteButton = ({ route, title }) => {
  return (
    // TODO link to MUI button
    <Button
      variant="contained"
      sx={{ minWidth: "200px" }}
      // TODO see if these need template literal or can just be string lol
      to={`${route}`}
      // TODO explain what this routerlink means
      component={RouterLink}
    >
      {`${title}`}
    </Button>
  );
};

export default RouteButton;
