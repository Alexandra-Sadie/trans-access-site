import { Stack, Typography, Button } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { firstQuestion } from "./questions/firstQuestion";
import { useState } from "react";

const Quiz = ({
  currentQuestion,
  setCurrentQuestion,
  currentChecklistItems,
  setCurrentChecklistItems,
  pendingChecklistItems,
  setPendingChecklistItems,
}) => {
  const [selectedButton, setSelectedButton] = useState("");
  const [pendingQuestion, setpendingQuestion] = useState({});
  const [previousQuestions, setPreviousQuestions] = useState([]);
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
            sx={{
              bgcolor:
                selectedButton === ""
                  ? "secondary.main" // default color if no buttons are selected yet
                  : selectedButton === answer.buttonText
                  ? "secondary.dark" // if the current button is selected it's highlighted dark
                  : "secondary.light", // the unselected button is de-highlighted light
              color: "text.primary",
            }} // TODO this looks WILD on dark mode
            onClick={() => {
              setPendingChecklistItems(answer.checklistItems);
              setSelectedButton(answer.buttonText);
              setpendingQuestion(answer.nextQuestion);
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
        <Button // Back button
          variant="contained"
          size="small"
          disabled={!previousQuestions.length} // disabled if there are no previous questions — if the array has no length, it returns falsy
          onClick={() => {
            if (previousQuestions.length) {
              const lastQuestionIndex = previousQuestions.length - 1;
              setCurrentQuestion(previousQuestions[lastQuestionIndex]);
              setPreviousQuestions(
                previousQuestions.toSpliced(lastQuestionIndex)
              );
            }
          }}
        >
          <ArrowBackIosNew fontSize="small" />
          {/* no idea why it's displaying off-center */}
        </Button>
        <Button // Forwards button
          variant="contained"
          size="small"
          onClick={() => {
            //TODO append currentQuestion onto prevQuestions array - upcoming
            if (selectedButton) {
              // the concat() function by default, when provided an array, will concatenate the *contents* of this array, instead of concatenating the array as a whole, i.e. concatenating [c,d] to [a,b] will result in [a,b,c,d] instead of [a,b,[c,d]]
              // Because we need to maintain currentChecklistItems as a 2D array, we thus wrap pendingChecklistItems in a new array
              setCurrentChecklistItems(
                currentChecklistItems.concat([pendingChecklistItems])
              );

              setPreviousQuestions(previousQuestions.concat(currentQuestion));
              console.log(previousQuestions);
              setCurrentQuestion(pendingQuestion);
              setSelectedButton(""); // stops buttons from staying highlighted across questions if they have the same answer text
            }
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Quiz;
