import { Grid2 as Grid, Paper } from "@mui/material";
import { Typography } from "@mui/material";

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
      <Grid size={{ xs: 4, md: 8 }} offset={{ xs: 0, md: 0 }}>
        <Paper elevation={4}>quiz!</Paper>
      </Grid>
      <Grid size={{ xs: 0, md: 4 }} offset={{ xs: 0, md: 0 }}>
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
