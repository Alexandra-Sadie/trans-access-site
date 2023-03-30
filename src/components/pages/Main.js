import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { routingObject } from "../../routing";

const RouteButton = ({ route, title }) => {
  return (
    <Button variant="contained" to={`${route}`} component={RouterLink}>
      {`To ${title}`}
    </Button>
  );
};

const Main = () => {
  console.log(
    Object.keys(routingObject).map(() => (
      <RouteButton route={"Route"} title={"Title"} />
    ))
  );
  return (
    <Stack>
      {Object.keys(routingObject).map((key) => {
        const route = routingObject[key].route;
        const title = routingObject[key].title;
        return <RouteButton route={route} title={title} />;
      })}
      {/* <Button
        variant="contained"
        to={`/${routingObject.intervention.route}`}
        component={RouterLink}
      >
        {`To ${routingObject.intervention.title}`}
      </Button>
      <Button
        variant="contained"
        to={`/${routingObject.name_change.route}`}
        component={RouterLink}
      >
        {`To ${routingObject.name_change.title}`}
      </Button>
      <Button
        variant="contained"
        to={`/${routingObject.therapist.route}`}
        component={RouterLink}
      >
        {`To ${routingObject.therapist.title}`}
      </Button>
      <Button
        variant="contained"
        to={`/${routingObject.doctor.route}`}
        component={RouterLink}
      >
        {`To ${routingObject.doctor.title}`}
      </Button> */}
    </Stack>
  );
};
export default Main;
