import { Stack, List } from "@mui/material";
import ProfessionalCard from "./ProfessionalCard";

const CardList = ({ cardArr }) => {
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
export default CardList;
