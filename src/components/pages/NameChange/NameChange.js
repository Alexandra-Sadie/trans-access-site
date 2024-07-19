import { Typography, Button, Stack, Card } from "@mui/material";
import { useState } from "react";
import SplashScreen from "./SplashScreen";

const NameChange = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const disableSplashScreen = () => setShowSplashScreen(false);

  return (
    <>
      <SplashScreen />
    </>
  );
};
export default NameChange;
