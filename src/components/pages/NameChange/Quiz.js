import { Stack, Typography, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { firstQuestion } from "./questions/firstQuestion";
import { useState, useContext } from "react";
import { NameChangeContext } from "../../../providers/NameChangeProvider";

const Quiz = ({
  currentQuestion,
  setCurrentQuestion,
  currentChecklistItems,
  setCurrentChecklistItems,
  pendingChecklistItems,
  setPendingChecklistItems,
}) => {
  const [selectedButton, setSelectedButton] = useState("");
  const [pendingQuestion, setPendingQuestion] = useState({});
  const { ofAgeBoolean, setOfAgeBoolean } = useContext(NameChangeContext);

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
        {
          // TODO this should be defensively coded to render empty string if no subHeader value
          currentQuestion.questionSubHeader
        }
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
            }} // TODO this looks WILD on dark mode
            onClick={() => {
              setPendingChecklistItems(answer.checklistItems);
              setSelectedButton(answer.buttonText);
              // if the next question would be different based on being 18+ we set pending question to that unique "ofAgeNextQuestion"
              if (
                // only runs if the over18 flag is true and there is a valid ofAgeNextQuestion object
                typeof answer.ofAgeNextQuestion === "object" &&
                ofAgeBoolean === true
              ) {
                setPendingQuestion(answer.ofAgeNextQuestion);
              } else {
                // if they are under 18 or if there is no "ofAgeNextQuestion" object, it progresses to nextQuestion as normal
                setPendingQuestion(answer.nextQuestion);
              }
              // this should only run once -- when you say if you're over 18 or not at the beginning
              if (typeof answer.ofAgeFlag === "boolean") {
                // of age flag
                setOfAgeBoolean(answer.ofAgeFlag);
              }
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
            if (selectedButton) {
              //TODO the decision to use concat on an array of arrays should probably be explained
              setCurrentChecklistItems(
                //TODO we need to run a flatten on the display side. this should be a nested array
                currentChecklistItems.concat([pendingChecklistItems])
              );

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
