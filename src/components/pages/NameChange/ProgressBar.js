import { useContext } from "react";
import { Stack, Paper, IconButton } from "@mui/material";
import { FormatListBulleted } from "@mui/icons-material";
import { ModalStateContext } from "./ModalStateProvider";

/* This is a custom progress bar that can 

We did this instead of customizing MUI's existing one, as the way it works impacts the custom. styling that can be applied to it, specifically in a way that would make implementing our design difficult.
Given that this is a relatively simple component, we decided to simply build it ourselves.

That being said, this is also not written as MUI components are.
It is instead written as a more basic React component, within which we are using MUI components.
*/

const ProgressBar = ({ value, custPadding, setDisplayModalBoolean }) => {
  // These two lines assign default values for height and padding
  //custHeight = custHeight ? custHeight : 24;
  custPadding = custPadding ? custPadding : 1;
  // Also, feel like it would be good make height and padding accessible via sx instead of as props
  // Note: height seems to be operating on pixels directly, not the 8px grid

  // This turns the value prop input, received as a number, into something the width attribute can understand
  value = `${value}%`; // We are turning it into a string and adding the % character

  return (
    <Paper // This is the Paper to hold the progress bar and checklist button
      elevation={4}
      sx={{
        height: 72,
        paddingY: 3,
        paddingLeft: 6,
        paddingRight: 3,
      }}
    >
      <Stack
        direction="row"
        spacing={3}
        // alignItems needs to be set to stretch for the papers and icon to align properly
        sx={{ alignItems: "stretch", height: "100%" }}
      >
        <Paper // This is the bar's background
          elevation={4}
          sx={{
            backgroundColor: "progressBar.light",
            // Not sure if we actually want the size and padding to be editable...
            // Also aware we probs need different values for mobile and desktop
            padding: custPadding,
            width: "100%",
          }}
        >
          <Paper // This is the inner bar that represents the amount completed
            elevation={4}
            sx={{
              backgroundColor: "progressBar.main",
              height: "100%",
              width: "50%",
            }}
          ></Paper>
        </Paper>
        <IconButton
          aria-label="open checklist"
          size="small"
          onClick={() => {
            setDisplayModalBoolean(true);
          }}
        >
          <FormatListBulleted />
        </IconButton>
      </Stack>
    </Paper>
  );
};
export default ProgressBar;
