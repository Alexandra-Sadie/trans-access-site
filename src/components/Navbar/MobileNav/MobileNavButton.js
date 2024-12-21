// !IMPORT ZONE
import { Link, MenuItem, Typography } from "@mui/material";
// We're importing react-router's Link as RouterLink to avoid namespace confusion with MUI's Link component. See our readme for more information on this :)
import { Link as RouterLink } from "react-router-dom";

const MobileNavButton = ({ route, title }) => (
  //TODO Link>MenuItem>Typography seems to be the most semantic and accessible way to make a MenuItem into a link, but we should determine if this is truly the correct accessibility approach
  <Link
    sx={{ textDecoration: "none", color: "text.primary" }}
    to={route}
    // see above on why this is RouterLink called inside an MUI Link
    component={RouterLink}
  >
    {/* This is a MUI component, designed to be a child of a higher-up Menu component - note that the Menu component is not in this file, but in MobileNavLinks.js, which calls this MobileNavButton component, making this MenuItem a valid child of that Menu
    
    MenuItem mostly creates nice spacing around items in a MUI menu
    docs: https://mui.com/material-ui/api/menu-item/
    */}
    <MenuItem>
      {/* Typography is a MUI component for all text elements in a page - the default is a <p> tag, which this element is
    docs: https://mui.com/material-ui/api/typography/
    */}
      <Typography>{title}</Typography>
    </MenuItem>
  </Link>
);

export default MobileNavButton;
