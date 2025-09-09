import * as React from "react";
import { Grid2 as Grid, Backdrop, Slide, Button, Paper } from "@mui/material";
import ProgressBar from "./ProgressBar";
import Quiz from "./Quiz";
import Checklist from "./Checklist";
import Modal from "./Modal";
import ModalStateProvider from "./ModalStateProvider";

// TODO: We want a minHeight for the quiz and checklist, along with a percentage instead of set heights
// Realizing this should be the same for both, so this should probably be handled here with props

const NameChange = () => {
  // // Creating variable and setter function for the checklist drawer functionality
  // const [drawerOpen, setDrawerOpen] = React.useState(false);
  // const handleDrawer = () => {
  //   // A feature of useState setter functions is that when given a function as a parameter, they automatically assume it's an updater function and thus pass the variable's previous value
  //   setDrawerOpen((prev) => !prev);
  // };

  const height = React.useState(700);
  // Temporarily deciding on making height a State because of its simplicity and use only in these direct children with no intermediaries
  // That being said, potential complications later with progress bar height being different?
  // Not sure if important, but the Papers seem to have their own rules for minimum heights aside from the sx prop

  return (
    <>
      <ModalStateProvider>
        <Grid container spacing={0} sx={{ width: "100%" }}>
          {/* TODO: Get rid of this */}
          {/* TODO: Investigate relative positioning here */}

          <Grid size={12} sx={{ zIndex: 0 }}>
            <Paper
              elevation={4}
              sx={{
                position: "relative", // TODO: Explain overlapping, organize accordingly
                // paddingTop: 19,
                // paddingBottom: 10,
                // top: -72,
                // minHeight: custMinHeight,
                height: height,
              }}
            >
              <ProgressBar value={50}></ProgressBar> {/* dummy value for now */}
              <Quiz custHeight={height}></Quiz>
            </Paper>
          </Grid>

          {/* <Backdrop
          open={drawerOpen}
          sx={{
            // These two properties make the backdrop fill the Grid row
            position: "relative",
            top: -height - 72,
            width: "100%", // This ensures the checklist and backdrop fill the Grid container
            zIndex: 20, // This places the backdrop in between the progress bar and checklist
            borderRadius: 1, // Gives Backdrop a border radius, 1 here is not the px value, but the amount to multiply default theme value by
            justifyContent: "flex-start", // This is necesassary for Grid item size to be respected
          }}
        >
          <Slide in={drawerOpen} direction="left"> */}
          <Modal height={height}>
            <Grid size={4} offset={8} sx={{ zIndex: 30 }}>
              <Checklist custHeight={height}></Checklist>
            </Grid>
          </Modal>
          {/* </Slide>
        </Backdrop> */}
          {/* old grid test array: {[...new Array(12)].map((_, i) => (
        <Grid size={{ xs: 1, md: 1 }}>
          <Paper>{i}</Paper>
        </Grid>
      ))} */}
        </Grid>
        {/* // Modal test button
      <Button
        variant="contained"
        onClick={handleDrawer}
        sx={{ position: "relative", top: -height - 72 }}
      >
        open drawer
      </Button> */}
      </ModalStateProvider>
    </>
  );
};

export default NameChange;
