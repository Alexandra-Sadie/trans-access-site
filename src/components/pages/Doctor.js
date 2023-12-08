import ProfessionalCardList from "../ProfessionalCardList/ProfessionalCardList";
import useCardList from "../../hooks/useCardList";

const Doctor = ({ path }) => {
  const currentCards = useCardList(path);

  return (
    <>{currentCards ? <ProfessionalCardList cardArr={currentCards} /> : null}</>
  );
};

export default Doctor;
