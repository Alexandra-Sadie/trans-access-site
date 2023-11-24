import { useContext } from "react";
import { CardsContext } from "../../providers/CardsProvider";

const Therapist = () => {
  const cards = useContext(CardsContext);
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
