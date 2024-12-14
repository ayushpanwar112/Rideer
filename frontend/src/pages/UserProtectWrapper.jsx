import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/'); // Redirect to home if no token
    }
  }, [token, navigate]); // Adding token and navigate as dependencies

  // If the token is not found, the component won't render children
  if (!token) {
    return null; // Optionally, you can return a loading spinner or message
  }

  return (
    <div>
      {children} {/* Render children if token is found */}
    </div>
  );
};

export default UserProtectWrapper;
