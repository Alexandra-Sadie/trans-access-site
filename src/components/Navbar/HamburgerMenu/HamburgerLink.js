// !IMPORT ZONE
import { Link, MenuItem, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const HamburgerLink = ({ route, title }) => (
  //i am winging that this Link>MenuItem>Typography the most semantic and accessible approach but it seems right
  // TODO improve^
  <Link
    sx={{ textDecoration: "none" }}
    to={route}
    // TODO explain routerlink
    component={RouterLink}
  >
    {/* // TODO menuitem docs link */}
    <MenuItem>
    {/* // TODO typography docs link */}
      <Typography textAlign="center">{title}</Typography>
    </MenuItem>
  </Link>
);

export default HamburgerLink;
