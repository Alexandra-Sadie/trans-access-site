// !IMPORT ZONE
import { Link, MenuItem, Typography } from "@mui/material";
// TODO extract to readme
// Link imported from "react-router-dom" is a React Router component that acts as an anchor link (wow!) to other routes (pages). HOWEVER because MUI ALSO has a component called Link, used to style anchor text, we import it as RouterLink across the entire project to avoid namespace confusion.
// For example, in this file, we import Link from MUI above and need to import React Router's Link under this different name.
// This is MUI recommended practice.
// React Router Link docs: https://reactrouter.com/en/main/components/link
// MUI routing/link docs: https://mui.com/material-ui/guides/routing/
import { Link as RouterLink } from "react-router-dom";

const MobileNavButton = ({ route, title }) => (
  //TODO Link>MenuItem>Typography seems to be the most semantic and accessible way to make a MenuItem into a link, but we should determine if this is truly the correct accessibility approach
  <Link
    sx={{ textDecoration: "none" }}
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
      <Typography textAlign="center">{title}</Typography>
    </MenuItem>
  </Link>
);

export default MobileNavButton;
