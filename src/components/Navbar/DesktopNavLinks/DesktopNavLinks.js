import { Stack } from "@mui/material";
import { routingObject } from "../../../routing";
import NavbarButton from "./NavbarButton";

const DesktopNavLinks = () => {
  return (
    //   Stack is a Box/div that automatically is a flex container
    <Stack
      direction="row"
      spacing={2}
      // this hides on mobile breakpoints
      // and grants its default display, flex, on
      // desktop breakpoint
      // note: I THINK that its default display is flex
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
