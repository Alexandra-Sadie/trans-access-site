import { Card, Stack, Typography, TextField, Button } from "@mui/material";
import { UserLoggedInContext } from "../../../providers/UserLoggedInProvider";
import { useContext, useState } from "react";
import { routingObject } from "../../../routing";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  // !LOGIC ZONE
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const { logIn } = useContext(UserLoggedInContext);
  const navigate = useNavigate();

  // !RETURN
  return (
    <Card elevation={2} sx={{ p: 3 }}>
      {/* //TODO we may want this to not be component and/or variant h4 for semantics */}
      <Typography variant="h4">Login</Typography>

      <Stack
        component="form"
        // TODO do we want novalidate? with it gone, it checks for valid email which is handy, but do we need it so html validation doesnt fuck with react?
        noValidate
      >
        {/* email */}
        <TextField
          margin="normal"
          required
          id="login-email"
          label="Email Address"
          name="login-email"
          //type="email" adds validation parameters and mobile keyboard customized for email input -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
          type="email"
          autoComplete="email"
          onChange={(e) => {
            setCurrentEmail(e.target.value);
          }}
          // value={currentEmail}
        ></TextField>

        {/* password */}
        <TextField
          margin="normal"
          required
          name="login-password"
          label="Password"
          // TODO can we add a button to make it visible?
          // this censors the text as you type it -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
          type="password"
          id="login-password"
          autoComplete="current-password"
          onChange={(e) => {
            setCurrentPassword(e.target.value);
          }}
        ></TextField>

        <Button
          type="submit"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            logIn(currentEmail, currentPassword);
            // this timeout is to look nice, remove for final production
            setTimeout(() => {
              navigate(routingObject.main.route);
            }, 300);
          }}
        >
          Log In
        </Button>
      </Stack>
    </Card>
  );
};

export default LoginCard;
