// !IMPORT ZONE
import { Stack } from "@mui/material";
import DesktopNavButton from "./DesktopNavButton";

const DesktopNavLinks = ({ navRoutesArray }) => {
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
      {navRoutesArray
        // this takes said sub-objects and renders them as buttons
        .map(({ route, title }) => (
          <DesktopNavButton key={route} route={route} title={title} />
        ))}
    </Stack>
  );
};
export default DesktopNavLinks;
