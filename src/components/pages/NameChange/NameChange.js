import { Grid2 as Grid, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";
import Quiz from "./Quiz";
import Checklist from "./Checklist";

// TODO: We want a minHeight for the quiz and checklist, along with a percentage instead of set heights
// Realizing this should be the same for both, so this should probably be handled here with props

const NameChange = () => {
  const height = 700;
  // Not sure if important, but the Papers seem to have their own rules for minimum heights aside from the sx prop

  return (
    <Grid container spacing={0} sx={{ width: "100%" }}>
      <Grid size={12} sx={{ zIndex: 10 }}>
        <ProgressBar value={50}></ProgressBar> {/* dummy value for now */}
      </Grid>
      <Grid size={12} sx={{ zIndex: 0 }}>
        <Quiz custHeight={height}></Quiz>
      </Grid>
      <Grid size={4} offset={8} sx={{ zIndex: 20 }}>
        <Checklist custHeight={height}></Checklist>
      </Grid>

      {/* old grid test array: {[...new Array(12)].map((_, i) => (
        <Grid size={{ xs: 1, md: 1 }}>
          <Paper>{i}</Paper>
        </Grid>
      ))} */}
    </Grid>
  );
};

export default NameChange;
