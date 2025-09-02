import { Stack, Paper, Card, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const Checklist = ({ custHeight, custMinHeight }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "relative",
        paddingTop: 6,
        paddingX: 2,
        top: -custHeight - 72, // Could handle this math earlier or use a template string
        // Alexandra leans towards latter so it's easier to find later if we want to change it
        height: custHeight,
        minHeight: custMinHeight,
      }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h6" component="h2">
          Your checklist
        </Typography>
        <Close />
      </Stack>
      <Stack spacing={4}></Stack>
    </Paper>
  );
};

export default Checklist;
