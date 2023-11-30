import { Stack } from "@mui/material";
import ProfessionalCard from "./ProfessionalCard";

const CardList = ({ cardArr }) => {
  return (
    // Stack component="ul"
    // gives us access to spacing, flex, etc properties of Stack
    // as vs. just List
    // TODO stack overflow this maybe:?
    <Stack component="ul" spacing={150}>
      {cardArr.map((professional) => (
        <ProfessionalCard key={professional.uid} {...professional} />
      ))}
    </Stack>
  );
};
export default CardList;
