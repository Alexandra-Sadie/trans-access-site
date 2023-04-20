// !IMPORT ZONE
import { Stack } from "@mui/material";
import { routingObject } from "../../../routing";
import NavbarButton from "./NavbarButton";

const DesktopNavLinks = () => {
  return (
    // Stack is essentially MUI's version of a flex container "for arranging items on a one-dimensional vertical/horizontal (horizontal is the default) axis".
    // docs: https://mui.com/material-ui/react-stack/
    <Stack
      direction="row"
      // this spacing property uses the spacing unit set in the MUI theme
      // docs: https://mui.com/material-ui/customization/spacing/
      spacing={2}
      // this means the Stack will be display:none at mobile breakpoints and display:flex on desktop breakpoints
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      {
        // this returns an array of each route sub-object of routingObject
        // these are expected to be of structure {route: string, title: string}
        Object.values(routingObject)
          // this takes said sub-objects and renders them as buttons
          .map(({ route, title }) => (
            <NavbarButton key={route} route={route} title={title} />
          ))
      }
    </Stack>
  );
};
export default DesktopNavLinks;
