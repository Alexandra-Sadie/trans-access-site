import { Card, Stack, Typography, TextField, Button } from "@mui/material";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useState } from "react";
import { routingObject } from "../../../routing";
import { useNavigate } from "react-router-dom";

const SignupCard = () => {
  // !LOGIC ZONE
  const { createNewUser } = useContext(AuthContext);
  const [currentSignupEmail, setCurrentSignupEmail] = useState("");
  const [currentSignupPassword, setCurrentSignupPassword] = useState("");
  const navigate = useNavigate();

  // !RETURN
  return (
    <Card elevation={2} sx={{ p: 3 }}>
      <Stack
        component="form"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          // we are providing this anonymous fn as our fn's third "callback" argument so that if the sign up successfully completes, it navigates to main page
          createNewUser(currentSignupEmail, currentSignupPassword, () => {
            navigate(routingObject.main.route);
          });
        }}
      >
        {/* // TODO this should not be h4 */}
        <Typography variant="h4">Inscrivez-vous </Typography>

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
          onChange={(e) => {
            setCurrentSignupEmail(e.target.value);
          }}
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
          onChange={(e) => {
            setCurrentSignupPassword(e.target.value);
          }}
        ></TextField>

        <Button type="submit" variant="contained">
          Inscription
        </Button>
      </Stack>
    </Card>
  );
};

export default SignupCard;
