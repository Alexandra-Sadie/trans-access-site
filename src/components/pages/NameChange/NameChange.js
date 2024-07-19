import { Typography, Button, Stack, Card } from "@mui/material";
import { useState } from "react";

const NameChange = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const disableSplashScreen = () => setShowSplashScreen(false);

  return (
    <>
      <Stack spacing={{ xs: 1, md: 2 }} alignItems="center" paddingTop={6}>
        <Typography variant="h2">Name Change Tool</Typography>
        <Typography variant="body1" maxWidth={"40vw"}>
          Explanation of what this tool is: Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Aperiam necessitatibus autem officia
          asperiores libero, maxime sed. Sint, consequuntur at suscipit magni
          ipsum laudantium blanditiis neque, veritatis optio laborum delectus.
          Nostrum.
        </Typography>
        <Button variant="contained">button</Button>
      </Stack>

      <Card>
        <Typography variant="h3">Question Card</Typography>
        <Stack>
          <Button variant="contained">First option</Button>
          <Button variant="contained">First option</Button>
          <Button variant="contained">First option</Button>
        </Stack>
      </Card>
    </>
  );
};
export default NameChange;
