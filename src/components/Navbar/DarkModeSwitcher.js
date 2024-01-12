// !IMPORT ZONE
import { Button } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const DarkModeSwitcher = () => {
  return (
    <>
      <Button sx={{ color: "primary.contrastText" }}>
        <DarkModeOutlined />
      </Button>
    </>
  );
};
export default DarkModeSwitcher;
