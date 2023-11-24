import { createContext, useState } from "react";

export const CardsContext = createContext({});

// this is a dummy list of cards, this will be server data later in development
// the top level properties match our main provider routes "therapist, doctor, etc"
const cards = {
  therapist: [
    {
      uid: "1",
      name: "Jane Doe",
      profession: "Therapist",
      location: "123 X Street, Montreal, Quebec, V6B 4A2",
      available: true,
      waitTime: 2,
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maiores minima eum laboriosam neque molestiae suscipit obcaecati reiciendis inventore soluta! Nobis corrupti esse laborum ad! Officiis alias quae autem obcaecati quos omnis, ex dolor porro reiciendis sed assumenda facilis. Repellat, voluptate, mollitia maxime ducimus qui fuga totam minima velit hic cupiditate laudantium?",
    },
    {
      uid: "2",
      name: "Jane Doe 2",
      profession: "Counselor",
      location: "225 Y Street, Montreal, Quebec, V6B 4A2",
      available: true,
      waitTime: 7,
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro magni assumenda eveniet nisi doloribus? Odio dignissimos dolor officia asperiores nam dolorum labore blanditiis cum, dolores libero ea. Reprehenderit numquam voluptatibus explicabo quo ipsum nam iure unde nulla eius magnam assumenda optio sit neque, esse facere voluptas impedit itaque animi. Exercitationem, at nulla rem inventore perspiciatis error dolorem, suscipit facere natus tempora quis esse? Maiores vero laborum, voluptates qui porro corrupti dicta inventore dignissimos excepturi distinctio iure!",
    },
  ],
};

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
