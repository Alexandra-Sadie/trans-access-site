// !IMPORT ZONE
import { Button } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useContext } from "react";
// our context
import { CustomThemesContext } from "../../providers/CustomThemesProvider";

const DarkModeSwitcher = () => {
  const {
    currentTheme,
    setCurrentTheme,
    homoeroticBullying,
    twinPeaksCharacter,
  } = useContext(CustomThemesContext);
  return (
    <>
      {currentTheme === homoeroticBullying ? (
        <Button
          sx={{ color: "primary.contrastText" }}
          onClick={() => {
            setCurrentTheme(twinPeaksCharacter);
          }}
        >
          <DarkModeOutlined />
        </Button>
      ) : (
        <Button
          sx={{ color: "primary.contrastText" }}
          onClick={() => {
            setCurrentTheme(homoeroticBullying);
          }}
        >
          <LightModeOutlined />
        </Button>
      )}
    </>
  );
};
export default DarkModeSwitcher;
