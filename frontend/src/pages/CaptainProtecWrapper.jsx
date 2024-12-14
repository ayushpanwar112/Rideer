import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainProtecWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { captain, setCaptain, isLoading, setLoading } = useContext(CaptainDataContext);

  const token = localStorage.getItem('token'); // Retrieve token

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setCaptain(response.data.captain);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        navigate('/captainlogin');
      }
    };

    if (token) {
      fetchProfile();
    } else {
      navigate('/captainlogin');
    }
  }, [token, navigate, setCaptain, setLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default CaptainProtecWrapper;
