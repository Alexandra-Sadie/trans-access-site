// !IMPORT ZONE
import { Button } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
// our context
import { CustomThemesContext } from "../../providers/CustomThemesProvider";

const DarkModeSwitcher = () => {
  const {
    setCurrentTheme,
    homoeroticBullying,
    twinPeaksCharacter,
    currentTheme,
  } = useContext(CustomThemesContext);

  // this useEffect and daisy-chain state exist to make the conditional rendering on the dark/light mode work -- just using state runs into sync issues with the DOM
  // "currentTheme" is the state that gets fed to MUI's theming engine, while "themeMode" is a state that just exists on this page, for the sole purpose of being accessibly by useEffect and being used for conditional rendering of the button

  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    if (currentTheme === homoeroticBullying) {
      setThemeMode("light");
    } else if (currentTheme === twinPeaksCharacter) {
      setThemeMode("light");
    }
  }, [
    currentTheme,
    // eslint requires these but they are static -- other option is to insert comment to disable eslint for this. for now i'm including them in the dependency array, keep an eye on if this breaks things
    homoeroticBullying,
    twinPeaksCharacter,
  ]);

  return (
    <>
      {themeMode === "light" ? (
        <Button
          sx={{ color: "primary.contrastText" }}
          onClick={() => {
            setCurrentTheme(twinPeaksCharacter);
            setThemeMode("dark");
            window.localStorage.setItem("themeMode", "dark");
            console.log(window.localStorage.themeMode);
          }}
        >
          <DarkModeOutlined />
        </Button>
      ) : (
        <Button
          sx={{ color: "primary.contrastText" }}
          onClick={() => {
            setCurrentTheme(homoeroticBullying);
            setThemeMode("light");
            window.localStorage.setItem("themeMode", "light");
            console.log(window.localStorage.themeMode);
          }}
        >
          <LightModeOutlined />
        </Button>
      )}
    </>
  );
};
export default DarkModeSwitcher;
