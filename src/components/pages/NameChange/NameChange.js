import { useState } from "react";
import { Grid } from "@mui/material";
import SplashScreen from "./SplashScreen";
import Questionnaire from "./Questionnaire";

const NameChange = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const disableSplashScreen = () => setShowSplashScreen(false);

  return (
    <Grid
      // spacing=3 leads to 24px spacing
      // ?: does spacing steal from second container? confirm and see if theres a fix
      // ?https://mui.com/material-ui/react-grid/#negative-margin
      //? padding does what we want, but is it the standard implementation on Grid?
      container
      sx={{ paddingLeft: 25, paddingRight: 25, marginTop: 11 }}
      spacing={3}
    >
      {showSplashScreen ? (
        <SplashScreen disableSplashScreen={disableSplashScreen} />
      ) : (
        <Questionnaire />
      )}
    </Grid>
  );
};
export default NameChange;
