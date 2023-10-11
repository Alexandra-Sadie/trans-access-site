import { Card, Stack, Typography, TextField, Button } from "@mui/material";

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
      {/* //*Login */}
      <Card>
        {/* //TODO we may want this to not be component and/or variant h4 for semantics */}
        <Typography variant="h4">Login</Typography>

        <Stack component="form" noValidate>
          {/* email */}
          <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            //type="email" adds validation parameters and mobile keyboard customized for email input -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
            type="email"
            autoComplete="email"
          ></TextField>

          {/* password */}
          <TextField
            margin="normal"
            required
            name="password"
            label="Password"
            // TODO can we add a button to make it visible?
            // this censors the text as you type it -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
            type="password"
            id="password"
            autoComplete="current-password"
          ></TextField>

          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </Card>
      <Card>
        <Typography variant="h4">Sign Up</Typography>
      </Card>
    </Stack>
  );
};

export default LoginSignup;
