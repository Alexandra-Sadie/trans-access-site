const palette = {
    light: {
    mode: "light",
    background: { default: "#FFE5D9", paper: "#fff9fa", object: "#FFE5D9" },
    text: { primary: "#5c474e" },
    primary: { main: "#9D8189", contrastText: "#271f22" },
    secondary: { main: "#F4ACB7" },
  },
    dark: {
        mode: "dark",
        background: { default: "#45435a", paper: "#4E4C67" },
        text: { primary: "#eeebfc" },
        //   the primary.main here is adjusted from #B4869F above -- a dif versin of it has primary.main as #A6B1E1 -- gives the site a more blue/cold tone, rather than pink/warm. i like this, but both Work
        primary: { main: "#b689a2", contrastText: "#272633" },
        secondary: { main: "#985F6F" },
    }
}

  export default palette;