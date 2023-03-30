import { Divider } from "@mui/material";
import { Stack } from "@mui/system";
import { routingObject } from "../../../routing";
import RouteButton from "./RouteButton";

const Main = () => {
  return (
    <Stack
      sx={{ pt: 6 }}
      spacing={1.5}
      divider={
        <Divider
          flexItem
          // divider always starts from left for vile reasons and it looks fun like this lol
          sx={{ maxWidth: "50%" }}
        />
      }
      alignItems="center"
    >
      {
        // this returns an array of each route sub-object of routingObject
        // these are expected to be of structure {route: string, title: string}
        Object.values(routingObject)
          // we are ON main page and don't want to include a link TO main page so we filter out that route
          // and keep the others
          .filter(({ route }) => route !== "/")
          // this takes said sub-objects and renders them as buttons
          .map(({ route, title }) => (
            <RouteButton key={route} route={route} title={title} />
          ))
      }
    </Stack>
  );
};
export default Main;
