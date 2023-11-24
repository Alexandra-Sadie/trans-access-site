import { useContext, useEffect } from "react";
import { CardsContext } from "../../providers/CardsProvider";
import { useLocation } from "react-router-dom";

const Therapist = () => {
  //on mount, currentCards should be an empty array
  const { currentCards, requestNewCards, resetCards } =
    useContext(CardsContext);

  // this pulls the pathname off of the route
  // TODO: explain this better, maybe find a more elegant way with router??
  const cardSubset = useLocation().pathname.slice(1);

  useEffect(() => {
    requestNewCards(cardSubset);
    console.count("inside " + cardSubset + " useEffect");

    return resetCards;
  }, [requestNewCards, cardSubset, resetCards]);

  return (
    <>
      {currentCards
        ? currentCards.map(
            ({ uid, name, profession, location, waitTime, bio }) => (
              <div key={uid}>
                <h1>{name}</h1>
                <h2>{profession}</h2>
                <h3>{location}</h3>
                <p>{`Wait Time: ${waitTime} weeks`}</p>
                <p>{bio}</p>
                <br />
              </div>
            )
          )
        : null}
    </>
  );
};

export default Therapist;
