import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const NameChange = () => {
  return (
    <Grid container spacing={2} pt={11}>
      {[...new Array(12)].map((_, i) => (
        <Grid xs={1}>
          <Paper>{i}</Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default NameChange;
