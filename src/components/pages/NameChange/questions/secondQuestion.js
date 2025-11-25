import { firstQuestion } from "./firstQuestion";
export const secondQuestion = {
  questionHeader:
    "This should lead to a different next question if you're under 18 or 18+.",
  questionSubHeader: "Lorem ipsum.",
  answers: [
    {
      buttonText: "Did it work?",
      checklistItems: [],
      ofAgeChecklistItems: [],
      nextQuestion: {
        questionHeader: "Under 18.",
        questionSubHeader: "This is the end of the current path.",
        answers: [],
      },
      ofAgeNextQuestion: {
        questionHeader: "Over 18.",
        questionSubHeader: "This is the end of the current path.",
        answers: [],
      },
    },
  ],
};
