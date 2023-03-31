import { Link, MenuItem, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const HamburgerLink = ({ route, title }) => (
  //i am winging that this Link>MenuItem>Typography the most semantic and accessible approach but it seems right
  <Link sx={{ textDecoration: "none" }} to={route} component={RouterLink}>
    <MenuItem>
      <Typography textAlign="center">{title}</Typography>
    </MenuItem>
  </Link>
);

export default HamburgerLink;
