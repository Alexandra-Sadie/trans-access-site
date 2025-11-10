import { fourthQuestion } from "./fourthQuestion";

const subquestions14Under = {
  // TODO: One of the paths still has following questions, getting confused, also link
  questionHeader: "Do you have multiple parents or guardians?",
  questionSubHeader: "",
  answers: [
    {
      buttonText: "Yes",
      checklistItems: [],
      nextQuestion: {
        questionHeader:
          "Do all of your parents consent and/or are any unable to sign the main form?", // This feels confusing to answer, feels like it should be separated into the subHeader or re-worded...
        // Also what's the main form?
        questionSubHeader: "",
        answers: [
          {
            buttonText: "Yes",
            checklistItems: [
              {
                checkItemHeader: "14 and under application", // Reworded from flowchart
                checkItemBodyText:
                  "Your parent or tutor must fill out the Application to Change the Sex Designation of a Person Under 14 Years of Age...", // Reworded from flowchart
                checkItemButton: {
                  text: "Link to PDF",
                  link: "", // TODO: missing link
                },
              },
            ],
            nextQuestion: fourthQuestion,
            done: false,
          },
          {
            buttonText:
              "I don't know/my other parent is unable to sign the main form",
            checklistItems: [], // TODO: Three checklist items
            //nextQuestion: , // TODO: Two more questions
            done: false,
          },
          {
            buttonText: "None of my parents consent", // Temp rewording from flowchart
            checklistItems: [], // I think this will need a checklist item?
            //nextQuestion: , //This is an ending...
            done: true,
          },
        ],
      },
      done: false,
    },
    {
      buttonText: "No, only one",
      checklistItems: [],
      //nextQuestion: , // TODO this path has more things
      done: false,
    },
  ],
};

const subquestions14To17 = {};

const subquestions18Plus = {
  questionHeader: "Are you divorced, married or a widow?", // This question feels like it doesn't leave room for neither at first
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

export const thirdQuestion = {
  questionHeader: "How old are you?",
  questionSubHeader: "",
  answers: [
    {
      buttonText: "Under 14",
      checklistItems: [
        {
          checkItemHeader: "Letter from a physician", // Temp text, based on flowchart
          checkItemBodyText:
            "The letter from a physician, psychologist, psychiatrist, sexologist or social worker authorized to practice in Canada or in the State in which you are domiciled, who declares having evaluated or followed you and who is of the opinion that this change of designation is appropriate", // Copy-pasted from flow-chart, there's a note on there about stuff to be added
          checkItemButton: {
            // Unsure what to put here
            text: "",
            link: "",
          },
        },
      ],
      nextQuestion: subquestions14Under,
      done: false,
    },
    {
      buttonText: "14-17",
      checklistItems: [
        {
          checkItemHeader: "Letter from a physician", // Temp text, based on flowchart
          checkItemBodyText:
            "The letter from a physician, psychologist, psychiatrist, sexologist or social worker authorized to practice in Canada or in the State in which you are domiciled, who declares having evaluated or followed you and who is of the opinion that this change of designation is appropriate", // Copy-pasted from flow-chart
          checkItemButton: {
            // Unsure what to put here
            text: "",
            link: "",
          },
        },
      ],
      nextQuestion: subquestions14To17,
      done: false,
    },
    {
      buttonText: "18+",
      checklistItems: [
        {
          checkItemHeader: "18+ application", // Based on flowchart text
          checkItemBodyText:
            "Application to change sex designation of a person 18 years and over", // Straight from flowchart, seems short?
          checkItemButton: {
            text: "Link to PDF",
            link: "https://www.etatcivil.gouv.qc.ca/publications/CMS_Application_Change_Sex_Designation_of_Person_18_Years_Age_and_Over.pdf",
          },
        },
      ],
      nextQuestion: subquestions18Plus,
      done: false,
    },
  ],
};
