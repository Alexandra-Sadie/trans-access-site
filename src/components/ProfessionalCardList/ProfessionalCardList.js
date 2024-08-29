import { Stack, List, Grid } from "@mui/material";
import ProfessionalCard from "./ProfessionalCard";
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
  // TODO useCollectionContext also delivers error, we could receive and handle that but don't yet
  const { getCollection, currentCollection } = useCollectionContext();
  useEffect(() => getCollection(path), [getCollection, path]);
  // on first load of a provider categoary, currentCollection may be null
  // we thus act defensively to have styles that match our cards load in blank
  // as we wait for the cards to appear
  const cardArr = currentCollection ? currentCollection : blankCardArr;
  return cardArr.map((professional) => (
    <Grid item md={10}>
      <ProfessionalCard key={professional.id} {...professional} />
    </Grid>
  ));
};
export default ProfessionalCardList;
