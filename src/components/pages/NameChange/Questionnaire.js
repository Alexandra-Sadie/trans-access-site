import { Grid, Card } from "@mui/material";

const Questionnaire = () => {
  return (
    // spacing=3 leads to 24px spacing
    // ?: does spacing steal from second container? confirm and see if theres a fix
    // ? https://mui.com/material-ui/react-grid/#negative-margin

    //? padding does what we want, but is it the standard implementation on Grid?
    <Grid
      container
      sx={{ paddingLeft: 25, paddingRight: 25, marginTop: 11 }}
      spacing={3}
    >
      {/* note: this needs to change, md values should be 8 and 4, xs different - we need this for now as mobile view not built yet. */}
      <Grid item xs={8}>
        <Card sx={{ minHeight: 200 }}>main question</Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ minHeight: 96 }}>checklist</Card>
      </Grid>
    </Grid>
  );
};
export default Questionnaire;
