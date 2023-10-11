import { Stack } from "@mui/material";

const LoginSignup = () => {
  return (
    <Stack
      // xs is mobile breakpoint, display as a column, md is desktop breakpoint, display side by side
      direction={{ xs: "column", md: "row" }}
      // this spacing property uses the spacing unit set in the MUI theme
      // docs: https://mui.com/material-ui/customization/spacing/
      spacing={2}
    ></Stack>
  );
};

export default LoginSignup;
