import { useContext, useEffect } from "react";
import { CardsContext } from "../../providers/CardsProvider";
import { useLocation } from "react-router-dom";

const Doctor = () => {
  //on mount, currentCards should be an empty array
  const { currentCards, requestNewCards, resetCards } =
    useContext(CardsContext);

  // this pulls the pathname off of the route
  // i.e. "therapist" for the therapist page etc
  // TODO: explain this better, maybe find a more elegant way with router??
  const cardSubset = useLocation().pathname.slice(1);

  // on mount, currentCards is empty array
  // THEN this fires, and requests a specific serviceType array from CardsProvider
  // based on the service type in the route of the page
  // that array then populates into currentCards
  //
  // this is to mock the logic of sending a server request on load
  // and then receiving the cards from that request
  // long term useEffect may be wrong herre but i think is ok for the lifetime of this mock
  useEffect(
    () => {
      requestNewCards(cardSubset);
      // this is to double check we're not creating an infinite loop
      console.count("inside " + cardSubset + " useEffect");

      return resetCards;
    },
    // eslint requires these but they are static
    // useEffect may be hacky here
    // TODO: read react docs on using something other than useEffect
    // however this logic will be different when the real db is up anyway
    [requestNewCards, cardSubset, resetCards]
  );

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

export default Doctor;
