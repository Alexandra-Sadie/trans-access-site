import { Card, Stack, Typography, Box, TextField } from "@mui/material";

const LoginSignup = () => {
  return (
    // Stack is a flex-container for one-directional groupings
    // here we are grouping a Login card and a singup card
    <Stack
      // pt is padding-top; for now we add a little more padding to the desktop view
      sx={{ pt: { xs: 6, md: 12 } }}
      // xs is mobile breakpoint, display as a column, md is desktop breakpoint, display side by side
      direction={{ xs: "column", md: "row" }}
      // this spacing property uses the spacing unit set in the MUI theme
      // docs: https://mui.com/material-ui/customization/spacing/
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card>
        {/* //TODO we may want this to not be component and/or variant h4 for semantics */}
        <Typography variant="h4">Login</Typography>

        <Box component="form" noValidate>
          <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          ></TextField>
        </Box>
      </Card>
      <Card>
        <Typography variant="h4">Sign Up</Typography>
      </Card>
    </Stack>
  );
};

export default LoginSignup;
