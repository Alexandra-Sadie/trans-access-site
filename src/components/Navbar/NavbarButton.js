import { Button } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const NavbarButton = ({ route, title }) => {
  return (
    <Button
      variant="text"
      sx={{ color: "#fff" }}
      to={`${route}`}
      component={RouterLink}
    >
      {`${title}`}
    </Button>
  );
};

export default NavbarButton;
