type Question = {
  qHeading: string,
  qSubHead?: string,
  answers: Answer[],
};

type Answer = {
  buttonText: string, // This will also serve as an identifier within answers array in Question object
  checklistItems: ChecklistItem[], // Can be an empty array; many answers won't add checklist items, so an empty array will signify this when returning to previous question
  nextQuestion?: Question,
  done?: boolean, // Slight redundancy (programatically, but not in terms of readability), also need to determine sorry! paths
};

type ChecklistItem = {
  checkItemHeader: string,
  checkItemBodyText: string, // Might update this key to not be required
  checkItemButton?: CheckItemButton, // Probably only one is needed, but may need to become an array
};

type CheckItemButton = {
  text: string,
  link: string, // This should always be a valid URL
};
