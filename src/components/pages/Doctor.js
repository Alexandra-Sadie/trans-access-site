import ProfessionalCardList from "../ProfessionalCardList/ProfessionalCardList";
import useCollection from "../../hooks/useCollection";

const Doctor = ({ path }) => {
  const { currentCollection } = useCollection(path);

  return <ProfessionalCardList cardArr={currentCollection} />;
};

export default Doctor;
