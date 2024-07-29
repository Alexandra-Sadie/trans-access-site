import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const CustomThemesContext = createContext({});
const CustomThemesProvider = ({ children }) => {
  const fontFamily = "Poppins";
  const fontWeightLight = 300;
  const fontWeightRegular = 400;
  const fontWeightMedium = 500;
  const fontWeightBold = 700;

  //   *Our Themes
  // rip to the original theme names. gone but not forgotten
  const customLightTheme = createTheme({
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
      primary: { main: "#9D8189", contrastText: "#271f22" },
      secondary: { main: "#F4ACB7" },
    },
    typography: {
      fontFamily,
      h1: {
        fontWeight: fontWeightLight,
        fontSize: "3.625rem", //58px
        letterSpacing: "-0.5px",
      },
      h2: {
        fontWeight: fontWeightRegular,
        fontSize: "33px",
        letterSpacing: "0.25px",
      },
      h3: {
        fontWeight: fontWeightMedium,
        fontSize: "19px",
        letterSpacing: "0.15px",
      },
      // the h4 isn't defined in the design document but we technically call the "Log In" and "Sign Up" card headers as h4s at the moment so i'm coding it in here for testing
      // i'm taking the values from "old desktop type styles > log in header"
      // i assume we could update this to one of our new styles but for now i will just replicate it
      h4: {
        fontWeight: fontWeightRegular,
        fontSize: "34px",
        lineHeight: "42px",
      },
      subtitle1: {
        fontWeight: fontWeightRegular,
        fontSize: "16px",
        letterSpacing: "0.15px",
      },
      subtitle2: {
        fontWeight: fontWeightMedium,
        fontSize: "14px",
        letterSpacing: "0.15px",
      },
      body1: {
        fontWeight: fontWeightRegular,
        fontSize: "16px",
        letterSpacing: "0.5px",
      },
      body2: {
        fontWeight: fontWeightRegular,
        fontSize: "14px",
        letterSpacing: "0.25px",
      },
      button: {
        fontWeight: fontWeightMedium,
        fontSize: "14px",
        letterSpacing: "1.25px",
      },
      caption: {
        fontWeight: fontWeightRegular,
        fontSize: "12px",
        letterSpacing: "0.4px",
      },
      overline: {
        fontWeight: fontWeightRegular,
        fontSize: "10px",
        letterSpacing: "1.5px",
      },
    },
  });

  const customDarkTheme = createTheme({
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
      //   the primary.main here is adjusted from #B4869F above -- a dif versin of it has primary.main as #A6B1E1 -- gives the site a more blue/cold tone, rather than pink/warm. i like this, but both Work
      primary: { main: "#b689a2", contrastText: "#272633" },
      secondary: { main: "#985F6F" },
    },
    typography: {
      fontFamily,
    },
  });

  //*state to track current theme
  const [currentTheme, setCurrentTheme] = useState(customDarkTheme);

  // *useMemo lets react dynamically switch theme (otherwise changing the theme state doesn't go "upstream" and adjust the themeProvider's theme prop in app.js, so the page doesn't update)
  const appliedTheme = useMemo(() => createTheme(currentTheme), [currentTheme]);

  return (
    <CustomThemesContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        appliedTheme,
        customLightTheme,
        customDarkTheme,
      }}
    >
      {children}
    </CustomThemesContext.Provider>
  );
};

export default CustomThemesProvider;
