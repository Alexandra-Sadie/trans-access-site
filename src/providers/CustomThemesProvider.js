import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const CustomThemesContext = createContext({});

const CustomThemesProvider = ({ children }) => {
  const defaultTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <CustomThemesContext.Provider
      value={{
        defaultTheme,
      }}
    >
      {children}
    </CustomThemesContext.Provider>
  );
};

export default CustomThemesProvider;
