export const dummyQuestion = {
  questionHeader: "This is a test question to add a checklist item.",
  questionSubHeader:
    "Press either button below to add an item to your checklist. (Eventually!)",
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
      ], // TODO this needs a better name i don't like documents cuz its sometimes Actions but idk
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
