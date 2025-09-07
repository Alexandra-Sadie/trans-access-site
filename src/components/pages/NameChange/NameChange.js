import * as React from "react";
import { Grid2 as Grid, Backdrop, Slide, Button } from "@mui/material";
import ProgressBar from "./ProgressBar";
import Quiz from "./Quiz";
import Checklist from "./Checklist";

// TODO: We want a minHeight for the quiz and checklist, along with a percentage instead of set heights
// Realizing this should be the same for both, so this should probably be handled here with props

const NameChange = () => {
  // Creating variable and setter function for the checklist drawer functionality
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawer = () => {
    // A feature of useState setter functions is that when given a function as a parameter, they automatically assume it's an updater function and thus pass the variable's previous value
    setDrawerOpen((prev) => !prev);
  };

  const height = 700;
  // Not sure if important, but the Papers seem to have their own rules for minimum heights aside from the sx prop

  return (
    <>
      <Grid container spacing={0} sx={{ width: "100%" }}>
        {/* TODO: Get rid of this */}
        <Grid size={12} sx={{ zIndex: 10 }}>
          {/* TODO: Investigate relative positioning here */}
          <ProgressBar value={50}></ProgressBar> {/* dummy value for now */}
        </Grid>

        <Grid size={12} sx={{ zIndex: 0 }}>
          <Quiz custHeight={height}></Quiz>
        </Grid>

        <Backdrop
          open={drawerOpen}
          sx={{
            position: "relative",
            top: -height - 72,
            // These two make the backdrop fill the Grid row
            width: "100%",
            height: height,
            zIndex: 20, // This places the backdrop in between the progress bar and checklist
            borderRadius: 1, // This matches the Paper's radius TODO: look into theme aware property
            justifyContent: "flex-start", // This is necesassary for Grid item size to be respected
          }}
        >
          <Slide in={drawerOpen} direction="left">
            <Grid size={4} offset={8} sx={{ zIndex: 30 }}>
              <Checklist custHeight={height}></Checklist>
            </Grid>
          </Slide>
        </Backdrop>
        {/* old grid test array: {[...new Array(12)].map((_, i) => (
        <Grid size={{ xs: 1, md: 1 }}>
          <Paper>{i}</Paper>
        </Grid>
      ))} */}
      </Grid>

      <Button
        variant="contained"
        onClick={handleDrawer}
        sx={{ position: "relative", top: -height - 72 }}
      >
        open drawer
      </Button>
    </>
  );
};

export default NameChange;
