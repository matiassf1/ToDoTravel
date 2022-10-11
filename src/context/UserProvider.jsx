import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({username: 'random', password:'random123'});
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn
      }}>
      {children}
    </UserContext.Provider>
  );
};
