import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

const RouteButton = ({ route, title }) => {
  return (
    <Button variant="contained" to={`${route}`} component={RouterLink}>
      {`${title}`}
    </Button>
  );
};

export default RouteButton;
