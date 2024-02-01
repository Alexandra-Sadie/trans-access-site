import { Stack, List } from "@mui/material";
import ProfessionalCard from "./ProfessionalCard";
import useCollection from "../../hooks/useCollection";
import { useCollectionContext } from "../../providers/CollectionProvider";
import { useEffect } from "react";

const blankCardArr = [
  {
    id: "0",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
  {
    id: "1",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
  {
    id: "2",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
  {
    id: "3",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
];

const ProfessionalCardList = ({ path }) => {
  // const { currentCollection } = useCollection(path);
  const { getCollection, currentCollection } = useCollectionContext();
  useEffect(() => getCollection(path), [getCollection, path]);
  // on load, currentCollection will be null while the request is pending
  // we thus act defensively to have styles that match our cards load in blank
  // as we wait for the cards to appear
  const cardArr = currentCollection ? currentCollection : blankCardArr;
  return (
    // Stack component="List"
    // gives us access to spacing, flex, etc properties of Stack
    // as vs. just List
    <Stack component={List} spacing={{ xs: 1, md: 2 }}>
      {cardArr.map((professional) => (
        <ProfessionalCard key={professional.id} {...professional} />
      ))}
    </Stack>
  );
};
export default ProfessionalCardList;
