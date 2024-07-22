import { Grid, Card } from "@mui/material";

const Questionnaire = () => {
  return (
    <>
      {/* note: this needs to change, md values should be 8 and 4, xs different - we need this for now as mobile view not built yet. */}
      <Grid item xs={8}>
        <Card sx={{ minHeight: 200 }}>main question</Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ minHeight: 96 }}>checklist</Card>
      </Grid>
    </>
  );
};
export default Questionnaire;
