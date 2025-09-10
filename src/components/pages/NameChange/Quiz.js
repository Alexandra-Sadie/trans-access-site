import { Stack, Typography, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { dummyQuestion } from "./dummyQuestion";

const Quiz = ({
  currentQuestion,
  setCurrentQuestion,
  setCurrentSelectedAnswer,
  currentChecklistItems,
  setCurrentChecklistItems,
  pendingChecklistItems,
  setPendingChecklistItems,
}) => {
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
        {currentQuestion.questionHeader}
      </Typography>
      <Typography variant="body1" align="left">
        {currentQuestion.questionSubHeader}
      </Typography>
      {currentQuestion.answers.map((answer) => {
        return (
          <Button
            key={answer.buttonText}
            variant="contained"
            size="large"
            sx={{ bgcolor: "secondary.main" }} // TODO this looks WILD on dark mode
            onClick={() => {
              setCurrentSelectedAnswer(answer.buttonText);
              setPendingChecklistItems(answer.checklistItems);
            }}
          >
            {answer.buttonText}
          </Button>
        );
      })}

      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Button variant="contained" size="small" disabled>
          <ArrowBackIos fontSize="small" />
          {/* no idea why it's displaying off-center */}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            //TODO append currentQuestion onto prevQuestions array - upcoming
            //TODO the decision to use concat on an array of arrays should probably be explained
            setCurrentChecklistItems(
              currentChecklistItems.concat(pendingChecklistItems)
            );
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Quiz;
