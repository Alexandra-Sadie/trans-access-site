import { useContext, useEffect } from "react";
import { CardsContext } from "../../providers/CardsProvider";
import CardList from "../CardList/CardList";
import useCardList from "../../hooks/useCardList";

const Therapist = ({ path }) => {
  const currentCards = useCardList(path);

  return <>{currentCards ? <CardList cardArr={currentCards} /> : null}</>;
};

export default Therapist;
