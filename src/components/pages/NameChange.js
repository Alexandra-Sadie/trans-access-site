// import { Grid2 as Grid, Paper } from "@mui/material";
import { Typography } from "@mui/material";

const NameChange = () => {
  return (
    <>
      <Typography variant="h2">Bientôt disponible !</Typography>
      <Typography>
        Notre outil pour vous aider à trouver les étapes et les documents dont
        vous aurez besoin pour obtenir un changement de nom ou de marque de
        genre sera lancé à l'été 2025.
      </Typography>
      {/* {[...new Array(12)].map((_, i) => (
        <Grid size={{ xs: 1, md: 1 }}>
          <Paper>{i}</Paper>
        </Grid>
      ))} */}
    </>
  );
};

export default NameChange;
