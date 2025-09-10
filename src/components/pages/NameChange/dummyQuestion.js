export const dummyQuestion = {
  questionHeader: "This is a test question to add a checklist item.",
  questionSubHeader:
    "Press either button below to add an item to your checklist. (Eventually!)",
  answers: [
    {
      buttonText: "Add checklist item",
      checklistItems: ["a", "b"], // TODO this needs a better name i don't like documents cuz its sometimes Actions but idk
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
