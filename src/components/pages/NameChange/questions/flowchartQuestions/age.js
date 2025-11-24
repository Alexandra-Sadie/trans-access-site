import { maritalStatus } from "./maritalStatus";

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

export const age = {
  // others: howOld
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
      nextQuestion: {
        questionHeader: "Who will file your application?",
        questionSubHeader: "",
        answers: [
          {
            buttonText: "Myself",
            checklistItems: [
              {
                checkItemHeader:
                  "14-17 self-filed sex designation change application",
                checkItemBodyText:
                  "The full name of the form is: Application to Change the Sex Designation of a Person between 14 and 17 Years of Age Filed by that Person",
                checkItemButton: {
                  text: "",
                  link: "",
                },
              },
              {
                checkItemHeader: "Photo ID photocopy",
                checkItemBodyText:
                  "Include a legible photocopy of valid photo ID with signature.",
                // Does this one need a button?
              },
              {
                checkItemHeader: "Information forwarding application",
                checkItemBodyText:
                  "The full name of the form is: Application for the Simplified Forwarding of Information Following a Change to the Act of Birth",
                checkItemButton: {
                  text: "",
                  link: "",
                },
              },
              {
                checkItemHeader: "List of documents appendix",
                checkItemBodyText:
                  "The appendix List of Documents to Include with the Application to Change the Sex Designation of a Person between 14 and 17 Years of Age Filed by that Person",
                // Don't think this needs a button, comes with the form
              },
              {
                checkItemHeader: "Affidavit",
                checkItemBodyText:
                  "Need to make an affidavit before a commissioner for oaths or a person authorized to administer oaths (Example, justice of the peace, attorney, notary, court clerk or deputy clerk, mayor, councillor, clerk or secretary−treasurer of a municipality, the Secretary General, the associate secretaries general and the associate secretaries of the National Assembly of Québec). The person who administers your affidavit cannot be your father, mother, parent, brother, sister, spouse or child.",
                checkItemButton: {
                  text: "",
                  link: "",
                },
              },
            ],
            nextQuestion: maritalStatus,
          },
          {
            buttonText: "My parent or tutor",
            checklistItems: [
              {
                checkItemHeader:
                  "14-17 guardian-filed sex designation change application",
                checkItemBodyText:
                  "The full name of the form is: Application to Change the Sex Designation of a Person between 14 and 17 Years of Age Filed by his Parent or Tutor",
                checkItemButton: {
                  text: "",
                  link: "",
                },
              },
              {
                checkItemHeader: "Consent", // Your consent? Person's consent?
                checkItemBodyText:
                  "Consent of the person between 14 and 17 years of age",
                checkItemButton: {
                  text: "",
                  link: "",
                },
              },
              {
                checkItemHeader: "Parent or tutor photo ID photocopy",
                checkItemBodyText:
                  "Include a legible photocopy of valid photo ID with signature for the parent/tutor of the person concerned by the application.",
                // Does this one need a button?
              },
              {
                checkItemHeader: "Photo ID", // Your photo ID?
                checkItemBodyText:
                  "Include a legible photocopy of the person’s photo ID, RAMQ can be accepted even if it doesn’t have a photo",
                // Does this one need a button?
              },
              {
                checkItemHeader: "Information forwarding application",
                checkItemBodyText:
                  "The full name of the form is: Application for the Simplified Forwarding of Information Following a Change to the Act of Birth",
                checkItemButton: {
                  text: "",
                  link: "",
                },
              },
              {
                checkItemHeader: "List of documents appendix",
                checkItemBodyText:
                  "The appendix List of Documents to Include with the Application to Change the Sex Designation of a Person between 14 and 17 Years of Age Filed by his Parent or Tutor",
                // Don't think this needs a button, comes with the form
              },
              {
                checkItemHeader: "Parent or tutor affidavit",
                checkItemBodyText:
                  "The parent/tutor needs to make an affidavit before a commissioner for oaths or a person authorized to administer oaths (Example, justice of the peace, attorney, notary, court clerk or deputy clerk, mayor, councillor, clerk or secretary−treasurer of a municipality, the Secretary General, the associate secretaries general and the associate secretaries of the National Assembly of Québec). The person who administers your affidavit cannot be your father, mother, parent, brother, sister, spouse or child.",
                checkItemButton: {
                  text: "",
                  link: "",
                },
              },
            ],
            nextQuestion: maritalStatus,
          },
        ],
      },
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
      nextQuestion: maritalStatus,
      done: false,
    },
  ],
};
