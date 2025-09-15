import { Grid2 as Grid, Paper, Box } from "@mui/material";
import ProgressBar from "./ProgressBar";
import Quiz from "./Quiz";
import Checklist from "./Checklist";
import { useState } from "react";
import { firstQuestion } from "./questions/firstQuestion";
import { secondQuestion } from "./questions/secondQuestion";
// TODO: We want a minHeight for the quiz and checklist, along with a percentage instead of set heights
// Realizing this should be the same for both, so this should probably be handled here with props

const NameChange = () => {
  // Temporarily deciding on making height a State because of its simplicity and use only in these direct children with no intermediaries
  // That being said, potential complications later with progress bar height being different?
  // Not sure if important, but the Papers seem to have their own rules for minimum heights aside from the sx prop

  const [displayModalBoolean, setDisplayModalBoolean] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(firstQuestion);
  const [pendingChecklistItems, setPendingChecklistItems] = useState([]);
  const [currentChecklistItems, setCurrentChecklistItems] = useState([]);

  return (
    <>
      <Grid container spacing={0} sx={{ width: "100%" }}>
        {/* TODO: Get rid of this  */}
        <Grid size={12} sx={{ zIndex: 0 }}>
          <Paper
            elevation={4}
            sx={{
              position: "relative", // TODO: Explain overlapping, organize accordingly
              height: 700,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                bgcolor: "grey",
                zIndex: "90", // TODO mb refine this
                opacity: "0.3", // TODO just eyeballed, key off design
                display: displayModalBoolean ? "flex" : "none",
              }}
            ></Box>
            <Checklist
              displayModalBoolean={displayModalBoolean}
              setDisplayModalBoolean={setDisplayModalBoolean}
              currentChecklistItems={currentChecklistItems}
            />
            <ProgressBar
              value={50} // dummy value for now
              displayModalBoolean={displayModalBoolean}
              setDisplayModalBoolean={setDisplayModalBoolean}
            />
            <Quiz
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              currentChecklistItems={currentChecklistItems}
              setCurrentChecklistItems={setCurrentChecklistItems}
              pendingChecklistItems={pendingChecklistItems}
              setPendingChecklistItems={setPendingChecklistItems}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default NameChange;
