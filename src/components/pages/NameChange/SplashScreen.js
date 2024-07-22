import { Typography, Button, Stack, Link } from "@mui/material";

const SplashScreen = ({ disableSplashScreen }) => {
  return (
    <Stack spacing={{ xs: 1, md: 2 }} alignItems="center" paddingTop={6}>
      <Typography variant="h2">Name Change Tool</Typography>
      <Typography variant="body1" maxWidth={"40vw"}>
        This is a tool to help trans people in Quebec better understand what
        they need to get a legal name and/or gender marker change. The process
        can be a bit complicated, and different documents or steps can be
        required based on factors like age, citizenship status, or time spent in
        Quebec.
      </Typography>
      <Typography variant="body1" maxWidth={"40vw"}>
        Because there are so many variables, we've made a short questionnaire to
        determine what documents or steps you'll need. As you answer questions
        about your situation, you'll see a checklist of requirements, which you
        can save after the quiz to track your progress.
      </Typography>
      <Button variant="contained" onClick={disableSplashScreen}>
        Begin
      </Button>
      <Typography variant="body1" maxWidth={"40vw"}>
        If you want, you can see the flowchart this is modeled after{" "}
        <Link href="https://i.imgur.com/RlD4UQ8.png">here</Link>.
      </Typography>
    </Stack>
  );
};
export default SplashScreen;
