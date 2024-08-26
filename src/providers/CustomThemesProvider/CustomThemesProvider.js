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

 
  //   *Our Themes
  // rip to the original theme names. gone but not forgotten
  // TODO full explainer of how mui theme works
  // in line with how MUI theming works, our custom themes below use the default MUI theme values unless otherwise specified
  // default theme here: https://mui.com/material-ui/customization/default-theme/
  // in other words, the custom values below are the only instances where we overwrite the default theme; otherwise the default applies
  // in some instances, we have values commented out below -- those are to indicate instances of a property that we are using the default theme value for that component, but have changed for other components. (e.g. we use a custom lineHeight for h1-h3, but the default one for the rest -- the default values are provided in a comment for consistency & legibility)
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
      // we're disables h4-h6 because we don't plan to use headers that deep, and feels against general semantics best practices to do so. we're disabling them to ensure that this remains the case
      // https://mui.com/material-ui/customization/typography/#adding-amp-disabling-variants
      h4: undefined,
      h5: undefined,
      h6: undefined,
      subtitle1: {
        fontWeight: fontWeightRegular,
        // lineHeight: 1.75
        ...calculateFontValues(0.15, 16),
      },
      subtitle2: {
        fontWeight: fontWeightMedium,
        // lineHeight: 1.57
        ...calculateFontValues(0.1, 14),
      },
      body1: {
        fontWeight: fontWeightRegular,
        // lineHeight: 1.5
        ...calculateFontValues(0.5, 16),
      },
      body2: {
        fontWeight: fontWeightRegular,
        // lineHeight: 1.43
        ...calculateFontValues(0.25, 14),
      },
      button: {
        fontWeight: fontWeightMedium,
        // lineHeight: 1.75
        ...calculateFontValues(1.25, 14),
        // textTransform: "uppercase"
      },
      caption: {
        fontWeight: fontWeightRegular,
        // lineHeight: 1.66
        ...calculateFontValues(0.4, 12),
      },
      overline: {
        fontWeight: fontWeightRegular,
        // lineHeight: 2.66
        ...calculateFontValues(1.5, 10),
        // textTransform: "uppercase"
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
