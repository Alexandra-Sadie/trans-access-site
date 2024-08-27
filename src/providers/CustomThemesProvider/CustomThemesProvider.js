import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import typescale from "./typescale";
import palette from "./palette";

export const CustomThemesContext = createContext({});
const CustomThemesProvider = ({ children }) => {
  //   *Our Themes
  // rip to the original theme names. gone but not forgotten
  // TODO full explainer of how mui theme works
  // TODO make this accurate to stuff being in typescale.js now
  // in line with how MUI theming works, our custom themes below use the default MUI theme values unless otherwise specified
  // default theme here: https://mui.com/material-ui/customization/default-theme/
  // in other words, the custom values below are the only instances where we overwrite the default theme; otherwise the default applies
  // in some instances, we have values commented out below -- those are to indicate instances of a property that we are using the default theme value for that component, but have changed for other components. (e.g. we use a custom lineHeight for h1-h3, but the default one for the rest -- the default values are provided in a comment for consistency & legibility)
  const customLightTheme = createTheme({
    palette: palette.light,
    typography: typescale,
  });

  const customDarkTheme = createTheme({
    palette: palette.dark,
    typography: typescale,
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
