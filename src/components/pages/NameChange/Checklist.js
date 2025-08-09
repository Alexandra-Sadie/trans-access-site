import { Stack, Paper, Card, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const Checklist = () => {
  return (
    <Paper elevation={4} sx={{ paddingTop: 6, paddingX: 2, height: 688 }}>
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
