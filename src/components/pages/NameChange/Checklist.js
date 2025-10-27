import {
  Stack,
  Paper,
  Typography,
  IconButton,
  Box,
  ClickAwayListener,
  Fade,
  Slide,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import ChecklistCard from "./ChecklistCard";
const Checklist = ({
  displayModalBoolean,
  setDisplayModalBoolean,
  currentChecklistItems,
}) => {
  // TODO would be nice to close it by clicking elsewhere on the page
  return (
    // The entire component will only mount if displayModalBoolean is true
    <>
      <Fade
        in={displayModalBoolean}
        // TODO this is using MUI default transition timing, I think? it's in the theme? we could have our designers choose a perfect timing if we want or just say this is cool 👍 ¯\_(ツ)_/¯
      >
        <Box // This is the backdrop
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bgcolor: "rgba(100, 100, 100, 0.3)", // TODO just eyeballed, key off design
            zIndex: 80, // TODO mb refine this we should have an actual z index system
            borderRadius: 1,
          }}
        ></Box>
      </Fade>
      {displayModalBoolean ? (
        <ClickAwayListener
          // this ClickAwayListener needs to be within the conditional rendering
          // -- otherwise clicking on the page even when the Paper is not rendered
          // would tricker the ClickAway
          // TODO BUT!!! this may not be best to wrap the rest in we don't want it to disagree with how the slide animation does a version of this. so idk it works but to look into???
          onClickAway={() => {
            if (displayModalBoolean === true) {
              setDisplayModalBoolean(false);
              console.log("im hidinggggg");
            }
          }}
        >
          <Slide in={displayModalBoolean}>
            <Paper
              elevation={0} // Shadows are not needed for the checklist, as the modal backdrop provides elevation cues to the user
              sx={{
                position: "absolute",
                width: "40%",
                height: "100%",
                right: 0,
                // TODO padding: 2 is an eyeball set for consistency with ProgressBar, the buttons are at the same place on the screen
                padding: 2,
                zIndex: 99,
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  // TODO confirm this in the figma -- i'm not sure i have access to it due to our new account setup
                  component="h2"
                  variant="h6"
                >
                  Your Checklist
                </Typography>
                <IconButton
                  aria-label="close checklist"
                  onClick={() => {
                    setDisplayModalBoolean(false);
                  }}
                >
                  <Close />
                </IconButton>
              </Stack>

              <Stack>
                {currentChecklistItems
                  //TODO this flattens one level of the nested array-- double check that is correct and we won't run into any issues
                  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
                  .flat() // currentChecklistItems is a 2d array for data logic reasons, so it must first be flattened in order to be displayed
                  .map((item) => (
                    <ChecklistCard key={item.checkItemHeader} {...item} />
                  ))}
              </Stack>
            </Paper>
          </Slide>
        </ClickAwayListener>
      ) : (
        ""
      )}
    </>
  );
};

export default Checklist;
