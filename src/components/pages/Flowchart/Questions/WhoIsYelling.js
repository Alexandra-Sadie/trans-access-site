import { Box, Typography, Stack, Button } from "@mui/material";
import { useState } from "react";

const WhoIsYelling = () => {
  // *STATE ZONE
  const [finchYelling, setFinchYelling] = useState(false);
  const [displayWhoIsYelling, setDisplayWhoIsYelling] = useState("");

  return (
    <Box display={displayWhoIsYelling}>
      <Typography>Which cat is yelling?</Typography>
      <Stack direction="row" spacing={2}>
        {/* I am just giong to code the "Finch" path first */}
        {/* These buttons should have some logic to make them be the same size but I'm doing that rn lol */}
        <Button variant="contained">Cricket</Button>
        <Button
          variant="contained"
          onClick={() => {
            // I'm leaving this state here, because state tracking + ternary rendering was my first thought on how to go through the questions, but i'm going to implement another idea that i think might work better, detailed below
            setFinchYelling(true);
            // hides itself
            setDisplayWhoIsYelling("none");
          }}
        >
          Finch
        </Button>
      </Stack>
    </Box>
  );
};
export default WhoIsYelling;
