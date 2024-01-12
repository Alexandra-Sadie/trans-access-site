// !IMPORT ZONE
import { Button } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useContext } from "react";
// our context
import { CustomThemesContext } from "../../providers/CustomThemesProvider";

const DarkModeSwitcher = () => {
  const { setCurrentTheme, homoeroticBullying, twinPeaksCharacter } =
    useContext(CustomThemesContext);
  return (
    <>
      <Button
        sx={{ color: "primary.contrastText" }}
        onClick={() => {
          setCurrentTheme(twinPeaksCharacter);
        }}
      >
        <DarkModeOutlined />
      </Button>
    </>
  );
};
export default DarkModeSwitcher;
