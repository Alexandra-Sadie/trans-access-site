import { createContext } from "react";

export const CardsContext = createContext({});

const cards = {
  therapist: [
    {
      name: "Jane Doe",
      profession: "Therapist",
      location: "123 X Street, Montreal, Quebec, V6B 4A2",
      available: true,
      waitTime: 2,
      bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus maiores minima eum laboriosam neque molestiae suscipit obcaecati reiciendis inventore soluta! Nobis corrupti esse laborum ad! Officiis alias quae autem obcaecati quos omnis, ex dolor porro reiciendis sed assumenda facilis. Repellat, voluptate, mollitia maxime ducimus qui fuga totam minima velit hic cupiditate laudantium? Quo perspiciatis consectetur culpa maxime iure? Accusamus quis architecto officiis totam repudiandae corrupti magni, eius omnis iste deleniti nostrum itaque adipisci nisi ipsa aliquam aperiam nihil repellat sapiente cupiditate? Fuga excepturi id quasi illum dolore explicabo dignissimos qui at rem aliquid magni, minus enim facilis quae placeat delectus modi soluta, cupiditate architecto. Tempore deserunt at omnis blanditiis? Neque repellat commodi dolore aliquam dicta id quidem excepturi architecto hic.",
    },
  ],
};

const CardsProvider = ({ children }) => {
  return (
    <CardsContext.Provider value={cards.therapist}>
      {children}
    </CardsContext.Provider>
  );
};
export default CardsProvider;
