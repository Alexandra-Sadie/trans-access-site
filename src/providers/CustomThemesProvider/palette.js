const palette = {
  // Lumi's color scheme:
  // 1. #D8E2DC
  // 2. #FFE5D9
  // 3. #FFCAD4
  // 4. #F4ACB7
  // 5. #9D8189

  light: {
    mode: "light",
    background: { default: "#FFE5D9", paper: "#fff9fa", object: "#FFE5D9" },
    text: { primary: "#5c474e" },
    primary: { main: "#9D8189", contrastText: "#271f22" },
    // !Note for building name change tool – some of these are hover states, test before building interactions
    secondary: {
      main: "#F8CDD4",
      light: "#F4ACB7",
      dark: "#FBDFE4",
      contrastText: "#271f22",
    },
    progressBar: { main: "#F8CDD4", light: "#FDEDEF" },
  },

  // Lumi's color scheme:
  // 1. #DCD6F7
  // 2. #A6B1E1
  // 3. #B4869F
  // 4. #985F6F
  // 5. #4E4C67

  dark: {
    mode: "dark",
    background: { default: "#45435a", paper: "#4E4C67" },
    text: { primary: "#eeebfc" },
    //   the primary.main here is adjusted from #B4869F above -- a dif versin of it has primary.main as #A6B1E1 -- gives the site a more blue/cold tone, rather than pink/warm. i like this, but both Work
    primary: { main: "#b689a2", contrastText: "#282735" },
    secondary: {
      main: "#3419A9",
      light: "#3A3659",
      dark: "#1A0D54",
      contrastText: "#eeebfc",
      // 'Color' style token in Figma isnt here
    },
    progressBar: { main: "#5E40E2", light: "#EEEBFC" },
  },
};

export default palette;
