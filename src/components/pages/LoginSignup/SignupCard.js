import { Card, Stack, Typography, TextField, Button } from "@mui/material";

const SignupCard = () => {
  return (
    <Card elevation={2} sx={{ p: 3 }}>
      <Stack compoment="form" novalidate>
        <Typography variant="h4">Sign Up</Typography>
        {/* email */}
        <TextField
          margin="normal"
          required
          id="signup-email"
          label="Email Address"
          name="signup-email"
          //type="email" adds validation parameters and mobile keyboard customized for email input -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
          type="email"
          autoComplete="email"
        ></TextField>

        {/* password */}
        <TextField
          margin="normal"
          required
          name="signup-password"
          label="Password"
          // TODO can we add a button to make it visible?
          // this censors the text as you type it -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
          type="password"
          id="signup-password"
          autoComplete="new-password"
        ></TextField>

        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </Stack>
    </Card>
  );
};

export default SignupCard;
