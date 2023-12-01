import CardList from "../CardList/CardList";

const Doctor = ({ path }) => {
  const currentCards = useCardList(path);

  return <>{currentCards ? <CardList cardArr={currentCards} /> : null}</>;
};

export default Doctor;
