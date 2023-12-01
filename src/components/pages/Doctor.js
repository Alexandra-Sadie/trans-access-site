import { useContext, useEffect } from "react";
import { CardsContext } from "../../providers/CardsProvider";
import CardList from "../CardList/CardList";

const Doctor = ({ path }) => {
  //on mount, currentCards should be an empty array
  const { currentCards, requestNewCards, resetCards } =
    useContext(CardsContext);

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
      requestNewCards(path);
      // this is to double check we're not creating an infinite loop
      console.count("inside " + path + " useEffect");

      return resetCards;
    },
    // eslint requires these but they are static
    // useEffect may be hacky here
    // TODO: read react docs on using something other than useEffect
    // however this logic will be different when the real db is up anyway
    [requestNewCards, path, resetCards]
  );

  return <>{currentCards ? <CardList cardArr={currentCards} /> : null}</>;
};

export default Doctor;
