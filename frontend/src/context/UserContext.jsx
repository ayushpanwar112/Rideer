import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

// Create context
export const userDataContext = createContext(); 
  

const UserContext = ({ children }) => {
      
  // Use useState to manage the user state
  const [user, setUser] = useState({
    email: '',
    fullname: {
      firstname: '',
      lastname: '',
      
    },
  });
  useEffect(()=>{
 console.log(user)
  },)
  return (
    <userDataContext.Provider value={{user, setUser}}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
