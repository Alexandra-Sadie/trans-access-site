import { Link, MenuItem, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const HamburgerLink = ({ route, title }) => (
  <MenuItem>
    {/* i am winging that this Link>Typography the most semantic and accessible approach but it seems right */}
    <Link sx={{ textDecoration: "none" }} to={route} component={RouterLink}>
      <Typography textAlign="center">{title}</Typography>
    </Link>
  </MenuItem>
);

export default HamburgerLink;
