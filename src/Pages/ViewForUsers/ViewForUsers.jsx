import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './ViewForUsers.scss'
import Chart from '../../Components/Chart/Chart'
import DataTable from '../../Components/DataTable/DataTable';

const ViewForUsers = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8088/users/`);
        console.log(res.data)

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
      {/* <h1>User ID: {userId}</h1> */}
      {user ? (
          <div className='Single'>
          <Sidebar/>
          <div className="singleContainer">
            <Navbar/>
            <div className="top">
              <div className="left">
                <div className="editBtn">
                  <button>{userId}</button></div>
                <h1 className="title">INFORMATION</h1>
                <div className="item">
                  <img className='itemImg' src="/sir.jpeg" alt="img" />
    
                  <div className="detail">
                    <h1 className='itemTitle'>{user.userName}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Roll:</span>
                      <span className="itemValue">{user.userType}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Courses:</span>
                      <span className="itemValue">DSA & DIP </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Department:</span>
                      <span className="itemValue">{user.department}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{user.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
              <Chart aspect={2.7/1}/>
              </div>
    
            </div>
    
            <div className="bottom">
            <h1 className="title">Users:</h1>
    
              <DataTable/>
    
            </div>
            
        
        </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ViewForUsers;
