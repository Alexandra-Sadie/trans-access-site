// !IMPORT ZONE
// CssBaseline is a requisite import for running MUI that applies some normalizing css so the site looks the same across browsers - I've imported it here as opposed to index.js because it must be wrapped WITHIN mui's ThemeProvider, or else CssBaseline will overwrite our themes and disable some functionality
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
// theming provider imported from mui
// ? this COULD be bundled with CssBaseline import on line 5 -- idk which is more performant or readable, probably best like this for readability?
import { ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { CustomThemesContext } from "../providers/CustomThemesProvider/CustomThemesProvider";
import Grid from "@mui/material/Unstable_Grid2";

const App = () => {
  // ! I believe that this context being accessed & thus requiring some logic makes mui's ThemeProvider better to host in app.js rather than index.js
  const { appliedTheme } = useContext(CustomThemesContext);

  return (
    <>
      <ThemeProvider theme={appliedTheme}>
        {/* // CssBaseline is MUI's version of a CSS Normalize snippet, which applies universal styles to the entire app to normalize some differences in visual rendering across browsers.
        docs: https://mui.com/material-ui/react-css-baseline/ */}
        <CssBaseline />
        {/* Using React Router's Outlet feature (see index.js), we can render the navbar, and below it, any route/page we want as a child of App.js. In practice, this puts the navbar on every page.
      See comments on index.js for further info. 
      docs: https://reactrouter.com/en/6.10.0/components/outlet
       */}
        <Navbar />
        {/* Because our visual design system uses a column grid, we are wrapping the Outlet in MUI's Grid container component, following Material UI best practices.
        In practice, this means that all our pages are rendered in this Grid format, and we can style the width and horizontal offset of their elements using MUI's Grid features knowing they are all wrapped in this Grid by virtue of the Outlet feature.
        */}
        <Grid
          container
          // n.b. the integer values of this "columns" property designates the count of the NUMBER of columns
          columns={{ xs: 4, md: 12 }}
          // all other integer values below are multiplier's of MUI's spacing value in px (default, which we use, is x)
          columnSpacing={{ xs: 2, md: 3 }}
          // note that this is a placeholder for making a
          // decision re: row spacing
          // for now it mirrors columnSpacing
          rowSpacing={{ xs: 2, md: 3 }}
          marginTop={{ xs: 6, md: 8 }}
          // paddingX gives left-right padding
          paddingX={{ xs: 2, md: 25 }}
        >
          <Outlet />
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
