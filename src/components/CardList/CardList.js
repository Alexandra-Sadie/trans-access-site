import { Stack } from "@mui/material";
import ProfessionalCard from "./ProfessionalCard";

const CardList = ({ cardArr }) => {
  return (
    // Stack component="ul"
    // gives us access to spacing, flex, etc properties of Stack
    // as vs. just List
    // ? stack overflow this maybe:?
    // ? choose best spacing, but xs1md2 seems ok?
    // ? maybe add padding top
    <Stack component="ul" spacing={{ xs: 1, md: 2 }}>
      {cardArr.map((professional) => (
        <ProfessionalCard key={professional.uid} {...professional} />
      ))}
    </Stack>
  );
};
export default CardList;
