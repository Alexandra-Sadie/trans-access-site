import ProfessionalCardList from "../ProfessionalCardList/ProfessionalCardList";
import useCollection from "../../hooks/useCollection";
import { Typography } from "@mui/material";

const Doctor = ({ path }) => {
  const { currentCollection } = useCollection(path);

  return (
    <>
      {currentCollection ? (
        <ProfessionalCardList cardArr={currentCollection} />
      ) : (
        <Typography>Loading...</Typography>
      )}
    </>
  );
};

export default Doctor;
