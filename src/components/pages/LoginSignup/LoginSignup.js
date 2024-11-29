import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";
import GridItemPolyfill from "../../GridItemPolyfill";

const LoginSignup = () => {
  return (
    <>
      <GridItemPolyfill size={{ xs: 4, md: 3 }} offset={{ xs: 0, md: 3 }}>
        <LoginCard />
      </GridItemPolyfill>
      <GridItemPolyfill size={{ xs: 4, md: 3 }} offset={{ xs: 0, md: 0 }}>
        <SignupCard />
      </GridItemPolyfill>
    </>
  );
};

export default LoginSignup;
