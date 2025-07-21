import {
  Box,
  Grid2 as Grid,
  Stack,
  Paper,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";

const NameChange = () => {
  return (
    <Grid
      container
      // This container inherits the properties of the parent container, so only updated spacing is needed.
      spacing={{ xs: 0, md: 0 }}
      // This is apparently needed cuz otherwise it's tiny and stays in the corner? Uncertain if this is what I'm *supposed* to do, but I found this fix on the legacy > v2 migration page
      sx={{ width: "100%" }}
    >
      {/* Not sure if it would be best to:
       - do what I did, which is to have a new Grid container here in order to prevent spacing in between Papers
       - or instead to have a single Paper with other stuff inside it? Is this possible? */}

      {/* This Grid item is for the progress bar 
      We're going to need some heavy customizations to this component to match the visual style we have */}
      <Grid size={{ xs: 3, md: 12 }}>
        <Paper elevation={6} sx={{ padding: 4 }}>
          <LinearProgress variant="determinate" value="50"></LinearProgress>
        </Paper>
      </Grid>

      {/* This grid container is for the quiz! */}
      <Grid container size={{ xs: 4, md: 8 }} columns={{ xs: 3, md: 8 }}>
        <Paper elevation={4}>
          <Grid
            size={{ xs: 2, md: 6 }}
            offset={{ xs: 0, md: 1 }}
            // sx={{ marginTop: { md: 9 } }}
          >
            <Box sx={{ paddingTop: 9, paddingBottom: 9.5 }}>
              {/* Unsure if having both the container and the margins makes sense? Shouldn't I be able to use paddingX to space out a column on the sides? Esp. cuz the design doesn't take up an amount of columns but columns + padding... 
              And yet, getting rid of this container with the internal grid and putting marginTop in any other component (ie. Stack, Paper) pushes the entire paper down, essentially extending the page's margins... 
              Furthermore, it seems that Grid is meant to create columns, not vertical lists, making the use of separating the nav buttons and the questions + answers, even iffier...*/}

              {/* This stack is for the question and answers */}
              <Stack
                spacing={7}
                sx={{ justifyContent: "center", alignItems: "stretch" }}
              >
                <Typography variant="h2" component="h1" align="center">
                  {/* Not sure which header scale to use here 
                    Also not sure if there *should* be an h1, irregardless of appearance */}
                  Have you acquired and submitted all the documents in your
                  checklist?
                </Typography>
                <Typography variant="body1" align="center">
                  Once you’ve submitted everything, the État Civil will render a
                  decision.
                  {/* The design don't seem to follow this standard sizing thing, which tells me I have to use sx, but am unsure as to how sizing works with sx - wait what did I mean by this*/}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: "secondary.main" }}
                >
                  They approved
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: "secondary.main" }}
                >
                  They refused
                </Button>

                {/* This stack is for the nav buttons */}
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Button variant="contained" size="small">
                    prev
                  </Button>
                  <Button variant="contained" size="small">
                    next
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Paper>
      </Grid>

      {/* This grid is for the checklist! */}
      <Grid size={{ xs: 4, md: 4 }} offset={{ xs: 0, md: 0 }}>
        <Paper elevation={4}>checklist!</Paper>
      </Grid>

      {/* Old temp page text:
      <Typography variant="h2">Bientôt disponible !</Typography>
      <Typography>
        Notre outil pour vous aider à trouver les étapes et les documents dont
        vous aurez besoin pour obtenir un changement de nom ou de marque de
        genre sera lancé à l'été 2025.
      </Typography>
      */}
      {/* old grid test array: {[...new Array(12)].map((_, i) => (
        <Grid size={{ xs: 1, md: 1 }}>
          <Paper>{i}</Paper>
        </Grid>
      ))} */}
    </Grid>
  );
};

export default NameChange;
