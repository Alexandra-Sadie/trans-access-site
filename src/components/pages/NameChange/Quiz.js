import { Stack, Typography, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { dummyQuestion } from "./dummyQuestion";
import { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(dummyQuestion);
  const [pendingChecklistItems, setPendingChecklistItems] = useState([]);
  const [currentCheckListItems, setCurrentCheckListItems] = useState([]);
  const [currentSelectedAnswer, setCurrentSelectedAnswer] = useState("");

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
        <Button variant="contained" size="small">
          <ArrowForwardIos fontSize="small" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Quiz;
