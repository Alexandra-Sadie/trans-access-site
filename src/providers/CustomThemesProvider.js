import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const CustomThemesContext = createContext({});

const CustomThemesProvider = ({ children }) => {
  const defaultDark = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <CustomThemesContext.Provider
      value={{
        defaultDark,
      }}
    >
      {children}
    </CustomThemesContext.Provider>
  );
};

export default CustomThemesProvider;
