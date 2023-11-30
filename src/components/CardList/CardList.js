import { List } from "@mui/material";
import ProfessionalCard from "./ProfessionalCard";

const CardList = ({ cardArr }) => {
  return (
    <List>
      {cardArr.map((professional) => (
        <ProfessionalCard key={professional.uid} {...professional} />
      ))}
    </List>
  );
};
export default CardList;
