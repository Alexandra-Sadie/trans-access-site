export const secondQuestion = {
  questionHeader: "This is the second mandatory question.",
  questionSubHeader: "This is the end of the current path.",
  answers: [
    {
      buttonText: "Add checklist item",
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
      nextQuestion: {},
      done: true,
    },
    {
      buttonText: "Do NOT add a checklist item",
      checklistItems: [],
      nextQuestion: {},
      done: true,
    },
  ],
};
