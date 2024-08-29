// !IMPORT ZONE
import { Divider } from "@mui/material";
import { Stack } from "@mui/system";
import { routingObject } from "../../../routing";
import RouteButton from "./RouteButton";
import Grid from "@mui/material/Unstable_Grid2/";

const Main = () => {
  return (
    // Stack is essentially MUI's version of a flex container "for arranging items on a one-dimensional vertical/horizontal (horizontal is the default) axis".
    // docs: https://mui.com/material-ui/react-stack/
    <Grid size={{ md: 10 }} offset={{ md: 5 }}>
      <Stack
        sx={{ pt: 6 }}
        spacing={1.5}
        // This divider is purely a stylistic touch we added while futzing around.
        // divider={
        //   <Divider
        //     flexItem
        //     // Dividers always start from the left - this makes it stop halfway through the page - and it looks fun like this :)
        //     sx={{ maxWidth: "50%" }}
        //   />
        // }
        alignItems="center"
      >
        {/* <Grid
        container
        sx={{ paddingLeft: 25, paddingRight: 25, paddingTop: 4 }}
        spacing={3}
        justifyContent="center"
        direction="column"
        > */}
        {
          // this returns an array of each route sub-object of routingObject
          // these are expected to be of structure {route: string, title: string}
          Object.values(routingObject)
            // we are ON main page and don't want to include a link TO main page so we filter out that route
            // and keep the others
            .filter(
              ({ route }) =>
                route !== "/" &&
                route !== "my_account" &&
                route !== "login_signup"
            )
            // this takes said sub-objects and renders them as buttons
            .map(({ route, title }) => (
              <RouteButton key={route} route={route} title={title} />
            ))
        }
        {/* </Grid> */}
      </Stack>
    </Grid>
  );
};
export default Main;
