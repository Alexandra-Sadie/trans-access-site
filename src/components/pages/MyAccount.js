import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { auth } from "../../firebase";

const MyAccount = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <p>current user: {user.email}</p>
          <p>is this user email-verified? {`${user.emailVerified}`}</p>
          <p>full user object:</p>
          <p>{JSON.stringify(user)}</p>
        </>
      ) : (
        "No current user"
      )}
    </div>
  );
};
export default MyAccount;
