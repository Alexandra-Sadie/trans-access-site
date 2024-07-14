// !IMPORT ZONE
import { Button, Stack, Typography, Box } from "@mui/material";
import { useState } from "react";
import WhoIsYelling from "./Questions/WhoIsYelling";

const Flowchart = () => {
  // so I'm looking at react mui drawers: https://mui.com/material-ui/react-drawer/ -- there are a couple options
  // the "responsive drawer" seems closest to what we might want?
  // this being for having a checklist on the side that can keep trakc of what papers/etc somene needs as they fill out the quiz
  // i will implement basic flowchart functionality first and then examine this further, presumably we'll do this together
  // *STATE ZONE

  return (
    <>
      <Stack sx={{ pt: 6 }} spacing={1.5} alignItems="center">
        <Typography variant="h2">Why is my cat yelling?</Typography>
        {/* Putting this in a box (mui div) so that when I apply vanilla react state/conditional logic, this box can appear or disappear based on said logic*/}
        {/* Maybe this could/should be a Stack or a more directly relevant MUI component? */}
        <WhoIsYelling />

        {/* render this finch-specific question only if finch is yelling 
        this kind of conditional rendering will quickly break or become very cumbersome, however -- i think maybe what we will want is two separate things
        1. a set of states tracking the important takeaways -- eg "finchYelling" or "therapistNoteNeeded"
        2. we have a bunch of components with questions within them, which are set to display:none by default. clicking on a button to answer a question then re-sets its component to display: none, and display:flex (or whatever) to the question that it leads to in the flowchart?
        */}

        <Box>
          <Typography>
            She just woke up from a nap and is like where are you guuuuuys am I
            alone...........
          </Typography>
          <Typography>
            Make a sound so she know's you're in the other room and stpos
            freaking out.
          </Typography>
        </Box>

        <Box>
          <Typography>
            Either there is a bird in the window or Cricket and Finch are
            playfighting.
          </Typography>
          <Typography>Let them have fun. :)</Typography>
        </Box>
      </Stack>
    </>
  );
};
export default Flowchart;
