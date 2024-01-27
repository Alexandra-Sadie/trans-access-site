import ProfessionalCardList from "../ProfessionalCardList/ProfessionalCardList";
import useCollection from "../../hooks/useCollection";

const Doctor = ({ path }) => {
  const currentCards = useCollection(path);

  return (
    <>{currentCards ? <ProfessionalCardList cardArr={currentCards} /> : null}</>
  );
};

export default Doctor;
