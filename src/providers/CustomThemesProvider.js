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
    // Lumi's color scheme:
    // 1. #D8E2DC
    // 2. #FFE5D9
    // 3. #FFCAD4
    // 4. #F4ACB7
    // 5. #9D8189
    palette: {
      mode: "light",
      background: { default: "#FFE5D9", paper: "#fff9fa", object: "#FFE5D9" },
      text: { primary: "#5c474e" },
      // constrast-adjusted from 1.
      primary: { main: "#4f6a5a" },
      secondary: { main: "#F4ACB7" },
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
