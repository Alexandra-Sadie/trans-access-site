import { Stack, Paper, Typography, Button } from "@mui/material";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Quiz = () => {
  return (
    <Stack
      spacing={7}
      sx={{
        justifyContent: "center",
        alignItems: "stretch",
        marginTop: 10,
        marginX: "16%",
      }}
    >
      <Typography variant="h2" component="h1" align="center">
        {/* Not sure which header scale to use here */}
        Have you acquired and submitted all the documents in your checklist?
      </Typography>
      <Typography variant="body1" align="left">
        Once you’ve submitted everything, the État Civil will render a decision.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ bgcolor: "secondary.main" }}
      >
        They approved
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{ bgcolor: "secondary.main" }}
      >
        They refused
      </Button>
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Button variant="contained" size="small">
          <ArrowBackIos fontSize="small" />{" "}
          {/* no idea why it's displaying off-center */}
        </Button>
        <Button variant="contained" size="small">
          <ArrowForwardIos fontSize="small" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Quiz;
