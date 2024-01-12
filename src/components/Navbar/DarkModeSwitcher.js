// !IMPORT ZONE
import { Button } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useContext, useState } from "react";
// our context
import { CustomThemesContext } from "../../providers/CustomThemesProvider";

const DarkModeSwitcher = () => {
  const { setCurrentTheme, homoeroticBullying, twinPeaksCharacter } =
    useContext(CustomThemesContext);

  // attempting to destructure/de-state-ify currentTheme to see if the switcher interacts with it better that way -- i think there might be a dom/react desync issue
  const [themeMode, setThemeMode] = useState("light");
  return (
    <>
      {/* {currentTheme === homoeroticBullying ? ( */}
      <Button
        sx={{ color: "primary.contrastText" }}
        onClick={() => {
          setCurrentTheme(twinPeaksCharacter);
          setThemeMode("dark");
          console.log(themeMode);
        }}
      >
        <DarkModeOutlined />
      </Button>
      {/* ) : ( */}
      <Button
        sx={{ color: "primary.contrastText" }}
        onClick={() => {
          setCurrentTheme(homoeroticBullying);
          setThemeMode("light");
          setThemeMode("light");

          console.log(themeMode);
        }}
      >
        <LightModeOutlined />
      </Button>
      {/* )} */}
    </>
  );
};
export default DarkModeSwitcher;
