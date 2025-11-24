export const maritalStatus = {
  questionHeader: "Are you divorced, married or a widow?", // This question feels like it doesn't leave room for a "none of these" option at first
  questionSubHeader: "",
  answers: [
    {
      buttonText: "Yes, I am divorced",
      checklistItems: [
        {
          checkItemHeader: "Divorce certificate",
          checkItemBodyText:
            "Copy of the final judgement or certificate of divorce",
          checkItemButton: {
            text: "",
            link: "",
          },
        },
      ],
      nextQuestion: fourthQuestion,
      done: false,
    },
    {
      buttonText: "Yes, I am a widow",
      checklistItems: [],
      nextQuestion: {
        questionHeader: "Did the death of your spouse occur outside of Quebec?",
        questionSubHeader: "",
        answers: [
          {
            buttonText: "Yes",
            checklistItems: [
              {
                checkItemHeader: "Late spouse's death certificate",
                checkItemBodyText:
                  "Original copy of an act, certificate or official document certifying the death issued by the authorized civil status officer of the country or province in which the death occurred",
                checkItemButton: {
                  text: "",
                  link: "",
                },
              },
            ],
            nextQuestion: fourthQuestion,
            done: false,
          },
          {
            buttonText: "No",
            checklistItems: [],
            nextQuestion: fourthQuestion,
            done: false,
          },
        ],
      },
      done: false,
    },
    {
      buttonText: "Yes, I am married",
      checklistItems: [],
      nextQuestion: {
        questionHeader: "Did this marriage occur outside of Quebec?",
        questionSubHeader: "",
        answers: [
          {
            buttonText: "Yes",
            checklistItems: [
              {
                checkItemHeader: "Marriage certificate",
                checkItemBodyText:
                  "Include the original copy of an act, certificate or official document certifying the marriage, issued by the authorized civil status officer of the country or province where the marriage took place.",
                checkItemButton: {
                  text: "",
                  link: "",
                },
              },
            ],
            nextQuestion: fourthQuestion,
            done: false,
          },
          {
            buttonText: "No",
            checklistItems: [],
            nextQuestion: fourthQuestion,
            done: false,
          },
        ],
      },
      done: false,
    },
    {
      buttonText: "None of the above",
      checklistItems: [],
      nextQuestion: fourthQuestion,
      done: false,
    },
  ],
};
