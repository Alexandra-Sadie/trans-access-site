export const dummyQuestion = {
  questionHeader: "This is a test question to add a checklist item.",
  questionSubHeader:
    "Press either button below to add an item to your checklist. (Eventually!)",
  answers: [
    {
      buttonText: "Add checklist item",
      addToChecklist: [], // TODO this needs a better name i don't like documents cuz its sometimes Actions but idk
      nextQuestion: {},
      done: true,
    },
    {
      buttonText: "Do NOT add a checklist item",
      addToChecklist: [],
      nextQuestion: {},
      done: true,
    },
  ],
};
