import { Card, Stack, Typography, TextField, Button } from "@mui/material";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useState } from "react";
import { routingObject } from "../../../routing";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  // !LOGIC ZONE
  const [currentLoginEmail, setCurrentLoginEmail] = useState("");
  const [currentLoginPassword, setCurrentLoginPassword] = useState("");
  const { logIn } = useContext(AuthContext);
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
        onSubmit={(e) => {
          e.preventDefault();
          logIn(currentLoginEmail, currentLoginPassword);
          // this timeout is to look nice, remove for final production
          navigate(routingObject.main.route);
        }}
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
            setCurrentLoginEmail(e.target.value);
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
            setCurrentLoginPassword(e.target.value);
          }}
        ></TextField>

        <Button type="submit" variant="contained">
          Log In
        </Button>
      </Stack>
    </Card>
  );
};

export default LoginCard;
