// !IMPORT ZONE
import { Button, Stack, Typography, Box } from "@mui/material";
import { useState } from "react";
import WhoIsYelling from "./Questions/WhoIsYelling";
import IsFinchAlone from "./Questions/IsFinchAlone";

const Flowchart = () => {
  // so I'm looking at react mui drawers: https://mui.com/material-ui/react-drawer/ -- there are a couple options
  // the "responsive drawer" seems closest to what we might want?
  // this being for having a checklist on the side that can keep trakc of what papers/etc somene needs as they fill out the quiz
  // i will implement basic flowchart functionality first and then examine this further, presumably we'll do this together
  // *STATE ZONE
  const [finchYelling, setFinchYelling] = useState(false);
  const [displayWhoIsYelling, setDisplayWhoIsYelling] = useState("");
  const [displayIsFinchAlone, setDisplayIsFinchAlone] = useState("none");

  return (
    <>
      <Stack sx={{ pt: 6 }} spacing={1.5} alignItems="center">
        <Typography variant="h2">Why is my cat yelling?</Typography>
        {/* Putting this in a box (mui div) so that when I apply vanilla react state/conditional logic, this box can appear or disappear based on said logic*/}
        {/* Maybe this could/should be a Stack or a more directly relevant MUI component? */}
        <Box display={displayWhoIsYelling}>
          <Typography>Which cat is yelling?</Typography>
          <Stack direction="row" spacing={2}>
            {/* I am just giong to code the "Finch" path first */}
            {/* These buttons should have some logic to make them be the same size but I'm doing that rn lol */}
            <Button variant="contained">Cricket</Button>
            <Button
              variant="contained"
              onClick={() => {
                // I'm leaving this state here, because state tracking + ternary rendering was my first thought on how to go through the questions, but i'm going to implement another idea that i think might work better, detailed below
                setFinchYelling(true);
                // hides itself
                setDisplayWhoIsYelling("none");
              }}
            >
              Finch
            </Button>
          </Stack>
        </Box>

        <Box display={displayIsFinchAlone}>
          <Typography>Is she alone in a room?</Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Yes</Button>
            <Button variant="contained">No</Button>
          </Stack>
        </Box>

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
