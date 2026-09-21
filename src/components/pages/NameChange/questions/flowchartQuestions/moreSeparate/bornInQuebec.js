import { livingInQuebec } from "./livingInQuebec";

export const bornInQuebec = {
  // other options: birthplace
  questionHeader: "Were you born in Quebec?",
  questionSubHeader: "",
  answers: [
    {
      buttonText: "Yes",
      checklistItems: [],
      nextQuestion: livingInQuebec,
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
