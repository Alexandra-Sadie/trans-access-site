import { secondQuestion } from "./secondQuestion";
export const firstQuestion = {
  questionHeader: "How old are you?",
  questionSubHeader:
    "The 'add checklist item' button will take you to a nested subquestion and add a checklist item. The 'do not add a checklist item' button will take you to the second mandatory question.",
  answers: [
    {
      buttonText: "Under 18",
      checklistItems: [
        {
          checkItemHeader: "Successful checklist item!",
          checkItemBodyText:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae, ex quibusdam at nostrum dolorem laborum omnis non quaerat cumque placeat nulla eum consectetur a et dolore? Maxime, molestias at?",
          checkItemButton: {
            text: "You can do anything...",
            url: "https://zombo.com/",
          },
        },
      ],
      nextQuestion: secondQuestion,
      // {
      //   //* NESTED SUB-QUESTION
      //   questionHeader: "This a nested sub-question.",
      //   questionSubHeader:
      //     "Both items below should take you to the second mandatory question.",
      //   answers: [
      //     {
      //       buttonText: "Add checklist item",
      //       checklistItems: [
      //         {
      //           checkItemHeader: "Successful checklist item!",
      //           checkItemBodyText:
      //             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae, ex quibusdam at nostrum dolorem laborum omnis non quaerat cumque placeat nulla eum consectetur a et dolore? Maxime, molestias at?",
      //           checkItemButton: {
      //             text: "You can do anything...",
      //             url: "https://zombo.com/",
      //           },
      //         },
      //       ],
      //       nextQuestion: secondQuestion,
      //       done: true,
      //     },
      //     {
      //       buttonText: "Do NOT add a checklist item",
      //       checklistItems: [],
      //       nextQuestion: secondQuestion,
      //       done: true,
      //     },
      //   ],
      // },
      done: true,
    },
    {
      buttonText: "18+",
      checklistItems: [],
      nextQuestion: secondQuestion,
      done: true,
    },
  ],
};
