import { firstTime } from "./firstTime";

export const childrenOfAge = {
  questionHeader: "Do you have children?",
  questionSubHeader: "",
  answers: [
    {
      buttonText: "Yes",
      checklistItems: [],
      nextQuestion: {
        questionHeader:
          "Are you looking to change the sex designation on your child's birth certificate?",
        questionSubHeader: "",
        answers: [
          {
            buttonText: "Yes",
            checklistItems: [],
            nextQuestion: {
              questionHeader: "Are any of your children 14 or older?",
              questionSubHeader: "",
              answers: [
                {
                  buttonText: "Yes",
                  checklistItems: [],
                  nextQuestion: firstTime,
                },
                {
                  buttonText: "No",
                  checklistItems: [],
                  nextQuestion: firstTime,
                },
              ],
            },
          },
          {
            buttonText: "No",
            checklistItems: [],
            nextQuestion: firstTime,
          },
        ],
      },
      done: false,
    },
    {
      buttonText: "No",
      checklistItems: [],
      nextQuestion: firstTime,
      done: false,
    },
  ],
};
