import { Grid2 as Grid, Paper } from "@mui/material";
const NameChange = () => {
  return (
    <>
      {[...new Array(12)].map((_, i) => (
        <Grid size={{ xs: 1, md: 1 }}>
          <Paper>{i}</Paper>
        </Grid>
      ))}
    </>
  );
};

export default NameChange;
