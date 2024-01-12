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
  }, [currentTheme]);

  return (
    <>
      {themeMode === "light" ? (
        <Button
          sx={{ color: "primary.contrastText" }}
          onClick={() => {
            setCurrentTheme(twinPeaksCharacter);
            setThemeMode("dark");
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
          }}
        >
          <LightModeOutlined />
        </Button>
      )}
    </>
  );
};
export default DarkModeSwitcher;
