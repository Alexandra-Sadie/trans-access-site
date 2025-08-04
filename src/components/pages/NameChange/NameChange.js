import { Grid2 as Grid, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";
import Quiz from "./Quiz";
import Checklist from "./Checklist";

const NameChange = () => {
  return (
    <Grid container spacing={0} sx={{ width: "100%" }}>
      <Grid size={12}>
        <ProgressBar value={50}></ProgressBar> {/* dummy value for now */}
      </Grid>
      <Grid size={8}>
        <Quiz></Quiz>
      </Grid>
      <Grid size={4}>
        <Checklist></Checklist>
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
