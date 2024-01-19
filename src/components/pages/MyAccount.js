import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Box, Typography } from "@mui/material";

const MyAccount = () => {
  const { user } = useContext(AuthContext);

  return (
    <Box>
      {user ? (
        <>
          <Typography>current user: {user.email}</Typography>
          <Typography>
            is this user email-verified? {`${user.emailVerified}`}
          </Typography>
          <Typography>full user object:</Typography>
          <Typography sx={{ overflowWrap: "break-word" }}>
            {JSON.stringify(user)}
          </Typography>
        </>
      ) : (
        "No current user"
      )}
    </Box>
  );
};
export default MyAccount;
