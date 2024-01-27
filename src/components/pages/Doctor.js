import ProfessionalCardList from "../ProfessionalCardList/ProfessionalCardList";
import useCollection from "../../hooks/useCollection";

const blankCardArr = [
  {
    uid: "0",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
  {
    uid: "1",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
  {
    uid: "2",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
  {
    uid: "3",
    name: "",
    profession: "",
    location: "",
    available: true,
    waitTime: 0,
    bio: "",
    avatar: "",
  },
];

const Doctor = ({ path }) => {
  const { currentCollection } = useCollection(path);

  return (
    <>
      {currentCollection ? (
        <ProfessionalCardList cardArr={blankCardArr} />
      ) : (
        <ProfessionalCardList cardArr={blankCardArr} />
      )}
    </>
  );
};

export default Doctor;
