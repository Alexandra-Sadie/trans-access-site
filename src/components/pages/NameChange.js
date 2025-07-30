import { Grid2 as Grid, Paper } from "@mui/material";
// import { Typography } from "@mui/material";

const NameChange = () => {
  return (
    <>
      <Grid container size={8} columns={8}>
        <Grid size={8}>
          <Paper sx={{ height: 100 }}>quiz! much wow!</Paper>
        </Grid>
      </Grid>
      {/* <Typography variant="h2">Bientôt disponible !</Typography>
      <Typography>
        Notre outil pour vous aider à trouver les étapes et les documents dont
        vous aurez besoin pour obtenir un changement de nom ou de marque de
        genre sera lancé à l'été 2025.
      </Typography> */}
      {/* {[...new Array(12)].map((_, i) => (
        <Grid size={{ md: 6 }} offset={{ md: 6 }}>
          <Paper sx={{ height: "150px" }}>
            <Grid offset={{ md: i }}>
              <Paper>{i + 1}</Paper>
            </Grid>
          </Paper>
        </Grid>
      ))} */}
    </>
  );
};

export default NameChange;
