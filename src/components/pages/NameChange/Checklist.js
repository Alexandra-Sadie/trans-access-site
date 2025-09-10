import { Stack, Paper, Typography, IconButton, Box } from "@mui/material";
import { Close } from "@mui/icons-material";

const Checklist = ({ displayModalBoolean, setDisplayModalBoolean }) => {
  return (
    <Paper
      elevation={4} // TODO is this doing things?
      sx={{
        position: "absolute",
        width: "40%",
        height: "100%",
        zIndex: "99",
        right: 0,
        display: displayModalBoolean ? "flex" : "none",
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
        <Stack>test</Stack>
      </Box>
    </Paper>
  );
};

export default Checklist;
