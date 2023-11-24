import { useContext } from "react";
import { CardsContext } from "../../providers/CardsProvider";
import { useLocation, useParams } from "react-router-dom";

const Therapist = () => {
  const cards = useContext(CardsContext);
  // this pulls the pathname off of the route
  // TODO: explain this better, maybe find a more elegant way with router??
  const cardSubset = useLocation().pathname.slice(1);

  console.log(cardSubset);

  return (
    <>
      {cards.therapist.map(
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
      )}
    </>
  );
};

export default Therapist;
