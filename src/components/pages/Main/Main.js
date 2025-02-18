// !IMPORT ZONE
import { Stack } from "@mui/system";
import { routingObject } from "../../../routing";
import RouteButton from "./RouteButton";

const Main = () => {
  return (
    // Stack is essentially MUI's version of a flex container "for arranging items on a one-dimensional vertical/horizontal (horizontal is the default) axis".
    // docs: https://mui.com/material-ui/react-stack/
    <Grid size={{ xs: 2, md: 2 }} offset={{ xs: 1, md: 5 }}>
      <Stack
        sx={{ pt: 6, alignItems: "center" }}
        spacing={3}
        // This divider is purely a stylistic touch we added while futzing around.
        // TODO removing divider ruins the vertical spacing lol
      >
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
                route !== "login_signup" &&
                // screening for french routes
                route !== "connexion_inscription" &&
                route !== "mon_compte"
            )
            // this takes said sub-objects and renders them as buttons
            .map(({ route, title }) => (
              <RouteButton key={route} route={route} title={title} />
            ))
        }
      </Stack>
    </Grid>
  );
};
export default Main;
