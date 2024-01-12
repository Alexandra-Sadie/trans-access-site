import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const CustomThemesContext = createContext({});

const CustomThemesProvider = () => {
  const CustomThemesProvider = ({ children }) => {
    return (
      <CustomThemesContext.Provider
        value={
          {
            // things to pass
          }
        }
      >
        {children}
      </CustomThemesContext.Provider>
    );
  };
};
export default CustomThemesProvider;
