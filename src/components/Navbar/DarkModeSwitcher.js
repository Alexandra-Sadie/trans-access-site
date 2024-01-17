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
  } = useContext(CustomThemesContext);

  // this useEffect and daisy-chain state exist to make the conditional rendering on the dark/light mode work -- just using state runs into sync issues with the DOM
  // "currentTheme" is the state that gets fed to MUI's theming engine, while "themeMode" is a state that just exists on this page, for the sole purpose of being accessibly by useEffect and being used for conditional rendering of the button

  const [themeMode, setThemeMode] = useState("light");

  // useEffect on-mount to set theme to previously selected theme which was stored in localStorage - see DarkModeSwitcher.js
  // TODO I still feel like using useEffect like this is hacky at best -- there Must be a better way to do this!
  useEffect(() => {
    // if user previously selected light theme, revert to light theme
    if (window.localStorage.themeMode === "light") {
      setCurrentTheme(homoeroticBullying);
      setThemeMode("light");
    }
    // if user previously selected dark theme, revert to dark theme
    else if (window.localStorage.themeMode === "dark") {
      setCurrentTheme(twinPeaksCharacter);
      setThemeMode("dark");
    } else {
      // in any other situation (first time using app, somehow something wrong got in localStorage), default to light theme
      setCurrentTheme(homoeroticBullying);
      setThemeMode("light");
    }
    // the comment below is necessary to let useEffect run with no dependencies (aka to run at pagemount), when eslint would claim it has missing dependencies 'homoeroticBullying', 'setCurrentTheme', and 'twinPeaksCharacter'. again, this is hacky and almost certainly unideal -- finding a better hook is on the agenda
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
