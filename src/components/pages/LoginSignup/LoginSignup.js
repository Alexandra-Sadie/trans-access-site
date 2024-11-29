import { Stack } from "@mui/material";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";
import GridItemPolyfill from "../../GridItemPolyfill";

const LoginSignup = () => {
  return (
    // Stack is a flex-container for one-directional groupings
    // here we are grouping a Login card and a singup card
    <GridItemPolyfill size={{ xs: 4, md: 6 }} offset={{ xs: 0, md: 3 }}>
      <Stack
        // pt is padding-top; for now we add a little more padding to the desktop view
        // sx={{ pt: { xs: 6, md: 12 } }}
        // xs is mobile breakpoint, display as a column, md is desktop breakpoint, display side by side
        direction={{ xs: "column", md: "row" }}
        // this spacing property uses the spacing unit set in the MUI theme
        // docs: https://mui.com/material-ui/customization/spacing/
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <LoginCard />
        <SignupCard />
      </Stack>
    </GridItemPolyfill>
  );
};

export default LoginSignup;
