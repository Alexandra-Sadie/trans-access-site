import { createContext } from "react";

export const CardsContext = createContext({});

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
  return (
    <CardsContext.Provider value={cards}>{children}</CardsContext.Provider>
  );
};
export default CardsProvider;
