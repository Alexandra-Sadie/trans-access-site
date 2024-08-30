import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GridItemPolyfill from "../GridItemPolyfill";
const NameChange = () => {
  return (
    <Grid container spacing={2} pt={11}>
      {[...new Array(12)].map((_, i) => (
        <GridItemPolyfill size={{ xs: 1, md: 1 }}>
          <Paper>{i}</Paper>
        </GridItemPolyfill>
      ))}
    </Grid>
  );
};

export default NameChange;
