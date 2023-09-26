import { useReducer } from "react";
import updateUserState, { initState } from "../reduce/userReducer";
import UserContext from "../context/UserContext";

const UserProvider = ({ children }) => {
  const [user, updateUser] = useReducer(updateUserState, initState);
  return (
    <UserContext.Provider value={[user, updateUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
