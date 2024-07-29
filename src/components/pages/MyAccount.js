import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Box, Typography } from "@mui/material";

const MyAccount = () => {
  const { localUser } = useContext(AuthContext);

  return (
    <Box>
      {localUser ? (
        <>
          <Typography>current user: {localUser.email}</Typography>
          <Typography>
            is this user email-verified? {`${localUser.emailVerified}`}
          </Typography>
          <Typography>full user object:</Typography>
          <Typography sx={{ overflowWrap: "break-word" }}>
            {JSON.stringify(localUser)}
          </Typography>
        </>
      ) : (
        "No current user"
      )}
    </Box>
  );
};
export default MyAccount;
