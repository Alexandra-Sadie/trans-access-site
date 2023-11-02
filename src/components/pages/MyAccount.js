import { useContext } from "react";
import { UserLoggedInContext } from "../../providers/UserLoggedInProvider";

const MyAccount = () => {
  const { user } = useContext(UserLoggedInContext);

  return <div>{user ? JSON.stringify(user) : "No current user"}</div>;
};
export default MyAccount;
