// type Question = {
//     qHeading: string;
//     qSubHead?: string;
//     answers: Answer[];
// };

// type Answer = {
//     buttonText: string; // Will be a key or a UUID ???
//     checklistItems: ChecklistItem[]; // Can be an empty array
//     nextQuestion?: Question;
//     done?: boolean // Slight redundancy, also need to determine sorry! paths
// };

// type ChecklistItem = {
//     // Prefix for these keys not final
//     itemHeader: string;
//     itemBodyText: string; // Might not be required
//     itemButton?: ItemButtonType; // Probably only one is needed, but may need to become an array
// };

// type ItemButtonType = { // Also, does this need to have the suffix "type"
//     text: string;
//     link: string; // Paper says URL, but this feels like it should be a string
// };
