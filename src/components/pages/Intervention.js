import CardList from "../CardList/CardList";

const Intervention = ({ path }) => {
  const currentCards = useCardList(path);

  return <>{currentCards ? <CardList cardArr={currentCards} /> : null}</>;
};

export default Intervention;
