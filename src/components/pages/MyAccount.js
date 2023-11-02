import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyAccount = () => {
  const { user } = useContext(AuthContext);

  return <div>{user ? JSON.stringify(user) : "No current user"}</div>;
};
export default MyAccount;
