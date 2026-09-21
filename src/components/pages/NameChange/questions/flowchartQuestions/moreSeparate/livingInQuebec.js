import { age } from "./age";

export const livingInQuebec = {
  // other options: domiciledforQ, livingInQuebecOneYear
  questionHeader: "Have you been domiciled in Quebec for at least one year?", // I feel like we should use "living" here instead...
  questionSubHeader: "",
  answers: [
    {
      buttonText: "Yes",
      checklistItems: [
        {
          checkItemHeader: "Two proofs of address",
          checkItemBodyText: "", // Not sure what needs to go here
          checkItemButton: {
            // Same here
            text: "",
            link: "",
          },
        },
      ],
      nextQuestion: age,
      done: false,
    },
    {
      buttonText: "No",
      checklistItems: [],
      //nextQuestion: , //Another ending!
      done: true,
    },
  ],
};
