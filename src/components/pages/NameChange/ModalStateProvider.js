import { createContext, useState } from "react";

export const ModalStateContext = createContext();

const ModalStateProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false);

  return (
    <ModalStateContext.Provider value={{ modalState, setModalState }}>
      {children}
    </ModalStateContext.Provider>
  );
};

export default ModalStateProvider;
