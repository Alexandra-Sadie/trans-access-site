import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { routingObject } from "../../routing";

const Main = () => {
  return (
    <Stack>
      <Button
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
      </Button>
    </Stack>
  );
};
export default Main;
