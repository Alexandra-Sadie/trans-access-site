import { useContext } from "react";
import { CardsContext } from "../../providers/CardsProvider";

const Therapist = () => {
  const cards = useContext(CardsContext);
  return (
    <>
      {cards.therapist.map((therapistCard) => (
        <div key={therapistCard.uid}>{JSON.stringify(therapistCard)}</div>
      ))}
    </>
  );
};

export default Therapist;
