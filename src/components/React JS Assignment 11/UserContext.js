import React, { createContext, useContext, useState } from 'react';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setUserDataContext = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, setUserDataContext }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
