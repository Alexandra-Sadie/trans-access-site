type Question = {
  qHeading: string,
  qSubHead?: string,
  answers: Answer[],
};

type Answer = {
  buttonText: string, // This will also serve as an identifier within answers array in Question object
  // TODO -- we might? not want to use buttonText as identifier, I forget when or how this comes up but i think this might result in React getting confused between e.g. two different questions that both have an answer whose buttonText is "yes" but are otherwise supposed to be different entities, do different things when selected etc. i vaguely remember us talking about other ways of giving our question/answer objects uuids or unique keys in some capacity. to investigate!
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
