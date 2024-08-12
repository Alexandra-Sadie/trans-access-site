import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

// MUI uses a default theme modeled after Material Design, provided as a js object, and allows for modifications. If a value in the default theme is not changed, the default value is used.
// Effectively, this means that the specified values below are our alterations to the default MUI theme, and anything else is using the MUI default.
// The MUI default theme is available here: https://mui.com/material-ui/customization/default-theme/
export const CustomThemesContext = createContext({});
const CustomThemesProvider = ({ children }) => {
  const fontFamily = "Poppins";

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
      primary: { main: "#b689a2", contrastText: "#282735" },
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
