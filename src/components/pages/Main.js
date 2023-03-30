import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { routingObject } from "../../routing";

const RouteButton = ({ route, title }) => {
  return (
    <Button variant="contained" to={`${route}`} component={RouterLink}>
      {`${title}`}
    </Button>
  );
};

const Main = () => {
  console.log(Object.values(routingObject));
  return (
    <Stack>
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
