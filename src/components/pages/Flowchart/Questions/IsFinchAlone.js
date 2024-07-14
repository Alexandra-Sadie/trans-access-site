import { Box, Typography, Stack, Button } from "@mui/material";
import { useState } from "react";

const IsFinchAlone = () => {
  //   render this finch-specific question only if finch is yelling
  //     this kind of conditional rendering will quickly break or become very cumbersome, however -- i think maybe what we will want is two separate things
  //     1. a set of states tracking the important takeaways -- eg "finchYelling" or "therapistNoteNeeded"
  //     2. we have a bunch of components with questions within them, which are set to display:none by default. clicking on a button to answer a question then re-sets its component to display: none, and display:flex (or whatever) to the question that it leads to in the flowchart?
  // *STATE ZONE
  const [displayIsFinchAlone, setDisplayIsFinchAlone] = useState("none");
  return (
    <Box display={displayIsFinchAlone}>
      <Typography>Is she alone in a room?</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Yes</Button>
        <Button variant="contained">No</Button>
      </Stack>
    </Box>
  );
};
export default IsFinchAlone;
