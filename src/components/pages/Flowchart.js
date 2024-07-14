// !IMPORT ZONE
import { Button, Stack, Typography, Box } from "@mui/material";

const Flowchart = () => {
  // so I'm looking at react mui drawers: https://mui.com/material-ui/react-drawer/ -- there are a couple options
  // the "responsive drawer" seems closest to what we might want?
  // this being for having a checklist on the side that can keep trakc of what papers/etc somene needs as they fill out the quiz
  // i will implement basic flowchart functionality first and then examine this further, presumably we'll do this together

  return (
    <>
      <Stack sx={{ pt: 6 }} spacing={1.5} alignItems="center">
        <Typography variant="h2">Why is my cat yelling?</Typography>
        {/* Putting this in a box (mui div) so that when I apply vanilla react state/conditional logic, this box can appear or disappear based on said logic*/}
        {/* Maybe this could/should be a Stack or a more directly relevant MUI component? */}
        <Box>
          <Typography>Which cat is yelling?</Typography>
          <Stack direction="row" spacing={2}>
            {/* I am just giong to code the "Finch" path first */}
            {/* These buttons should have some logic to make them be the same size but I'm doing that rn lol */}
            <Button variant="contained">Cricket</Button>
            <Button variant="contained">Finch</Button>
          </Stack>
        </Box>

        <Box>
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
