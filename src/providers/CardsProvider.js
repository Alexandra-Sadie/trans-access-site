import { createContext, useState } from "react";
import { cards } from "./dummyCards";

export const CardsContext = createContext({});

const CardsProvider = ({ children }) => {
  // the cardsList that is active in the app currently - defaults to empty array
  const [currentCards, setCurrentCards] = useState([]);

  //this receives a serviceType as a string, the string should be one of the top-level
  //properties of the static card object, which match our main service provider routes
  //it then sets currentCards to the array of provider cards matching that serviceType
  const requestNewCards = (serviceType) => setCurrentCards(cards[serviceType]);

  //This simply resets currentCards to an empty array, to be used on provider card unmount (i.e. the return value of a useEffect)
  const resetCards = () => setCurrentCards([]);
  return (
    <CardsContext.Provider
      value={{ currentCards, requestNewCards, resetCards }}
    >
      {children}
    </CardsContext.Provider>
  );
};
export default CardsProvider;
