import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";
import { Grid2 as Grid } from "@mui/material";

const LoginSignup = () => {
  return (
    <>
      <Grid size={{ xs: 4, md: 3 }} offset={{ xs: 0, md: 3 }}>
        <LoginCard />
      </Grid>
      <Grid size={{ xs: 4, md: 3 }} offset={{ xs: 0, md: 0 }}>
        <SignupCard />
      </Grid>
    </>
  );
};

export default LoginSignup;
