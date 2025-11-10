import { secondQuestion } from "./secondQuestion";

export const firstQuestion = {
  questionHeader: "Were you born in Quebec?",
  questionSubHeader: "",
  answers: [
    {
      buttonText: "Yes",
      checklistItems: [],
      nextQuestion: secondQuestion,
      done: false,
    },
    {
      buttonText: "No",
      checklistItems: [],
      //nextQuestion: //I don't have something for this yet! Don't quite remember how we're doing ending screens...
      done: true,
    },
  ],
};
