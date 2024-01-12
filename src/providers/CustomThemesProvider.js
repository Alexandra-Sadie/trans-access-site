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
      primary: { main: "#4f6a5a" },
      secondary: { main: "#F4ACB7" },
    },
    typography: {
      fontFamily: "Lato",
    },
  });

  const twinPeaksCharacter = createTheme({
    // Lumi's color scheme:
    // 1. #DCD6F7
    // 2. #A6B1E1
    // 3. #B4869F
    // 4. #985F6F
    // 5. #4E4C67
    palette: {
      mode: "dark",
      background: { default: "#45435a", paper: "#4E4C67" },
      text: { primary: "#eeebfc" },
      primary: { main: "#a6b0e1", contrastText: "#272633" },
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
        twinPeaksCharacter,
      }}
    >
      {children}
    </CustomThemesContext.Provider>
  );
};

export default CustomThemesProvider;
