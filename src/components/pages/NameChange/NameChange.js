import { Grid2 as Grid, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";
import Quiz from "./Quiz";
import Checklist from "./Checklist";

const NameChange = () => {
  return (
    <>
      <Grid size={12}>
        <ProgressBar></ProgressBar>
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
    </>
  );
};

export default NameChange;
