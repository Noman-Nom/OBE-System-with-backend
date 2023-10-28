import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewForUsers = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/users/`);
        // console.log(res)

        // const foundUser = res.data.find(user => user.id === userId);

        // pehle hum ye use kar rhe the  jis s data nahi arha tha phr hum ne ise parsint banaya to data agaya 

        const foundUser = res.data.find(user => user.id === parseInt(userId));
        // console.log(foundUser)
        setUser(foundUser);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [userId]);

  //  separate useEffect for logging
  useEffect(() => {
    if (user) {
    //   console.log(user);
    }
  }, [user]);

  return (
    <div>
      <h1>User ID: {userId}</h1>
      {user ? (
        <div>
          <h2>User Name: {user.userName}</h2>
         
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ViewForUsers;
