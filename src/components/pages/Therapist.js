import ProfessionalCardList from "../ProfessionalCardList/ProfessionalCardList";
import useCardList from "../../hooks/useCardList";

const Therapist = ({ path }) => {
  const currentCards = useCardList(path);

  return (
    <>{currentCards ? <ProfessionalCardList cardArr={currentCards} /> : null}</>
  );
};

export default Therapist;
