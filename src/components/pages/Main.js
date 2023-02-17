import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

const Main = () => {
  return (
    <Button variant="contained" to="/second" component={RouterLink}>
      To Second
    </Button>
  );
};
export default Main;
