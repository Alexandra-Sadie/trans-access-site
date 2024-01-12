import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const CustomThemesContext = createContext({});

const CustomThemesProvider = ({ children }) => {
  const defaultTheme = createTheme({
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily: "Lato",
    },
  });

  // TODO presumably we will rename this lol
  const homoeroticBullying = createTheme({
    palette: {
      mode: "light",
      background: { default: "#000", paper: "#000", object: "#000" },
      //   text: {},
      //   primary: {},
      //   secondary: {},
    },
    typography: {
      fontFamily: "Lato",
    },
  });

  return (
    <CustomThemesContext.Provider
      value={{
        defaultTheme,
        homoeroticBullying,
      }}
    >
      {children}
    </CustomThemesContext.Provider>
  );
};

export default CustomThemesProvider;
