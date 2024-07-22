import {
  Typography,
  Button,
  Stack,
  Card,
  Link,
  CardHeader,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";

const SplashScreen = ({ disableSplashScreen }) => {
  return (
    <Grid item xs={12} md={12}>
      <Paper align="center" alignItems="center" elevation={4}>
        <Grid item md={8}>
          <Stack spacing={{ xs: 1, md: 8 }}>
            <Typography variant="h1">Name Change</Typography>
            <Typography variant="h2">
              Do you want to legally change your sex designation and/or name but
              don’t know where to start?
            </Typography>
            <Typography variant="body1">
              This is a tool to help trans people in Quebec better understand
              what they need to get a legal name and/or gender marker change.
              The process can be a bit complicated, and different documents or
              steps can be required based on factors like age, citizenship
              status, or time spent in Quebec.
            </Typography>
            <Typography variant="body1">
              Because there are so many variables, we've made a short
              questionnaire to determine what documents or steps you'll need. As
              you answer questions about your situation, you'll see a checklist
              of requirements, which you can save after the quiz to track your
              progress.
            </Typography>
            <Button variant="contained" onClick={disableSplashScreen}>
              Begin
            </Button>
            <Typography variant="body1" align="center">
              If you want, you can see the flowchart this is modeled after
              here[LINK TKTK].
            </Typography>
          </Stack>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default SplashScreen;
