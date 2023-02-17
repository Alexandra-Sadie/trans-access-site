import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

const SecondPage = () => {
  return (
    <Button variant="outlined" to="/" component={RouterLink}>
      To Home
    </Button>
  );
};
export default SecondPage;
