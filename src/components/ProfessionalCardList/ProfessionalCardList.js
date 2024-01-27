import { Stack, List } from "@mui/material";
import ProfessionalCard from "./ProfessionalCard";

const blankCardArr = [
  {
    uid: "0",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
  {
    uid: "1",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
  {
    uid: "2",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
  {
    uid: "3",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
];

const ProfessionalCardList = ({ cardArr }) => {
  if (!cardArr) {
    cardArr = blankCardArr;
  }
  return (
    // Stack component="List"
    // gives us access to spacing, flex, etc properties of Stack
    // as vs. just List
    <Stack component={List} spacing={{ xs: 1, md: 2 }}>
      {cardArr.map((professional) => (
        <ProfessionalCard key={professional.uid} {...professional} />
      ))}
    </Stack>
  );
};
export default ProfessionalCardList;
