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
      {/* TODO: Get rid of this first Grid container  */}
      <Grid container spacing={0} sx={{ width: "100%" }}>
        {/* z-index not needed anymore I think */}
        <Grid size={12} sx={{ zIndex: 0 }}>
          <Paper
            elevation={4}
            sx={{
              position: "relative", // TODO: remove this
              height: 700,
            }}
          >
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
