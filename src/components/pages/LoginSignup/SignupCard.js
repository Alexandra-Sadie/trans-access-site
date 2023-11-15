import { Card, Stack, Typography, TextField, Button } from "@mui/material";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useState } from "react";
import { routingObject } from "../../../routing";
import { useNavigate } from "react-router-dom";

const SignupCard = () => {
  // !LOGIC ZONE
  const { createNewUserEnglish } = useContext(AuthContext);
  const [currentSignupEmail, setCurrentSignupEmail] = useState("");
  const [currentSignupPassword, setCurrentSignupPassword] = useState("");
  const navigate = useNavigate();

  // !RETURN
  return (
    <Card elevation={2} sx={{ p: 3 }}>
      <Stack component="form" noValidate>
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

        <Button
          type="submit"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            createNewUserEnglish(currentSignupEmail, currentSignupPassword);
            // this timeout is to look nice, remove for final production
            setTimeout(() => {
              navigate(routingObject.main.route);
            }, 300);
          }}
        >
          Sign Up
        </Button>
      </Stack>
    </Card>
  );
};

export default SignupCard;
