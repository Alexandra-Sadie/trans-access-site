import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const CustomThemesContext = createContext({});
const CustomThemesProvider = ({ children }) => {
  const fontFamily = "Poppins";
  const fontWeightLight = 300;
  const fontWeightRegular = 400;
  const fontWeightMedium = 500;
  // note: this is commented because not used but we keep it for future use
  // const fontWeightBold = 700;

  // TODO better name for this function
  const calculateFontValues = (letterSpacingPixelValue, fontSizePixelValue) => {
    // ? could be better to pass base font size explicitly (curry maybe?)
    const BASE_FONT_SIZE = 16;
    // TODO revisit this comment to make it make sense
    // https://mui.com/material-ui/customization/default-theme/
    // MUI theme docs has the letterSpacing as ems, not rems -- this means that the em is techically relative to the fontSize, aka the spacing will change slightly as the font size changes. we could do this -- it would apply if we ever decide to change the fontSize value of a typography element and want the letter spacing to adapt to it.
    return {
      fontSize: `${fontSizePixelValue / BASE_FONT_SIZE}rem`,
      letterSpacing: `${(letterSpacingPixelValue / fontSizePixelValue).toFixed(
        5
      )}em`,
    };
  };

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
      // i'm applying these changes only to the light mode so that switching to dark mode shows how it changes things quickly
      h1: {
        fontWeight: fontWeightLight,
        lineHeight: 1.2,
        ...calculateFontValues(-0.5, 58),
      },

      h2: {
        fontWeight: fontWeightRegular,
        lineHeight: 1.235,
        ...calculateFontValues(0.25, 33),
      },
      h3: {
        fontWeight: fontWeightMedium,
        lineHeight: 1.6,
        ...calculateFontValues(0.15, 19),
      },
      subtitle1: {
        fontWeight: fontWeightRegular,
        fontSize: "1rem", //16px
        letterSpacing: "0.15px",
      },
      subtitle2: {
        fontWeight: fontWeightMedium,
        fontSize: "0.875rem", // "14px"
        letterSpacing: "0.1px",
      },
      body1: {
        fontWeight: fontWeightRegular,
        fontSize: "1rem", //16px
        letterSpacing: "0.5px",
      },
      body2: {
        fontWeight: fontWeightRegular,
        fontSize: "0.875rem", // "14px"
        letterSpacing: "0.25px",
      },
      button: {
        fontWeight: fontWeightMedium,
        fontSize: "0.875rem", // "14px"
        letterSpacing: "1.25px",
      },
      caption: {
        fontWeight: fontWeightRegular,
        fontSize: "0.75rem", //12px
        letterSpacing: "0.4px",
      },
      overline: {
        fontWeight: fontWeightRegular,
        fontSize: "0.625rem", //"10px"
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
