import { Paper } from "@mui/material";
// Not sure if we should import the theme in here...
// As it stands, it seems to be getting it from above, so I think we're ok, but it does mean this wouldn't work without *our* theme and *our* colour names? Is that bad?

/* This is a custom progress bar that can 

We did this instead of customizing MUI's existing one, as the way it works impacts the custom. styling that can be applied to it, specifically in a way that would make implementing our design difficult.
Given that this is a relatively simple component, we decided to simply build it ourselves.

That being said, this is also not written as MUI components are.
It is instead written as a more basic React component, within which we are using MUI components.
*/

const ProgressBar = ({ value, custHeight, custPadding }) => {
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
      sx={{ height: 72, paddingY: 3, paddingX: 6 }}
    >
      <Paper // This is the bar's background
        elevation={4}
        sx={{
          backgroundColor: "progressBar.light",
          // Not sure if we actually want the size and padding to be editable...
          // Also aware we probs need different values for mobile and desktop
          height: "100%",
          padding: custPadding,
        }}
      >
        <Paper // This is the inner bar that represents the amount completed
          elevation={4}
          sx={{
            backgroundColor: "progressBar.main",
            height: "100%",
            width: value,
          }}
        ></Paper>
      </Paper>
    </Paper>
  );
};
export default ProgressBar;
