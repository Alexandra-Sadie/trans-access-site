import { Typography, Button, Stack, Card } from "@mui/material";
import { useState } from "react";
import SplashScreen from "./SplashScreen";
import Questionnaire from "./Questionnaire";

const NameChange = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const disableSplashScreen = () => setShowSplashScreen(false);

  return (
    <>
      {showSplashScreen ? (
        <SplashScreen disableSplashScreen={disableSplashScreen} />
      ) : (
        <Questionnaire />
      )}
    </>
  );
};
export default NameChange;
