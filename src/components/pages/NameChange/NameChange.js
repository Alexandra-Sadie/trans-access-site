import { Typography, Button, Stack, Card } from "@mui/material";
import { useState } from "react";
import SplashScreen from "./SplashScreen";

const NameChange = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const disableSplashScreen = () => {
    setShowSplashScreen(false);
    console.log(showSplashScreen);
  };

  return (
    <>
      <SplashScreen disableSplashScreen={disableSplashScreen} />
    </>
  );
};
export default NameChange;
