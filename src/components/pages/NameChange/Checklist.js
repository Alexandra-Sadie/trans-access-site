import {
  Stack,
  Paper,
  Typography,
  IconButton,
  Box,
  ClickAwayListener,
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
    // this && operator will only return the components if displayModalBoolean is true
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
    displayModalBoolean && (
      // this ClickAwayListener needs to be within the conditional rendering -- otherwise clicking on the page even when the Paper is not rendered would tricker the ClickAway
      <ClickAwayListener onClickAway={() => setDisplayModalBoolean(false)}>
        <Paper
          elevation={0} // Shadows are not needed for the checklist, as the modal backdrop provides elevation cues to the user
          sx={{
            position: "absolute",
            width: "40%",
            height: "100%",
            zIndex: "99",
            right: 0,
          }}
        >
          <Box
            // TODO this Box stops the Stacks below from inherting "height: 100%" -- idk ifthats the best way to do it
            // also width=100% makes it fill the paper
            // TODO padding: 3 is an eyeball based on the design having ~24px of padding -- this may need to change for consistency with ProgressBar, ideally the buttons are at the same place on the screen
            width="100%"
            sx={{ padding: 3 }}
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
                .flat()
                .map((item) => (
                  <ChecklistCard key={item.checkItemHeader} {...item} />
                ))}
            </Stack>
          </Box>
        </Paper>
      </ClickAwayListener>
    )
  );
};

export default Checklist;
