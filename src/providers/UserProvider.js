import React, { useState, createContext } from 'react';

export const UserContext = createContext({
  user: null,
  signedIn: false,
  setUser: () => null
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const contextValue = useMemo(() => ({
    user,
    signedIn: Boolean(user),
    setUser,
  }), [user]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
