import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './ViewPageForFaculty.scss'
import Chart from '../../Components/Chart/Chart'
import DataTableForCourse from '../../Components/DataTableForCourse/DataTableForCourse';

const ViewPageForFaculty = () => {
  const { facultyId } = useParams();
  const [faculty, setfaculty] = useState([])

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await axios.get(`http://localhost:8088/faculty/`);
        // console.log(res.data)

        // const foundUser = res.data.find(user => user.id === userId);

        // pehle hum ye use kar rhe the  jis s data nahi arha tha phr hum ne ise parsint banaya to data agaya 

        const foundFaculty = res.data.find(faculty => faculty.id === parseInt(facultyId));
        console.log(foundFaculty)
        setfaculty(foundFaculty);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFaculty();
  }, [facultyId]);

  //  separate useEffect for logging
  useEffect(() => {
    if (faculty) {
    //   console.log(user);
    }
  }, [faculty]);

  return (

    // <div>Hello</div>
    <div>
      {/* <h1>User ID: {userId}</h1> */}
      {faculty ? (
          <div className='Single'>
          <Sidebar/>
          <div className="singleContainer">
            <Navbar/>
            <div className="top">
              <div className="left">
                <div className="editBtn">
                  <button>{facultyId}</button></div>
                <h1 className="title">INFORMATION</h1>
                <div className="item">
                  <img className='itemImg' src="/teacher.jpg" alt="img"  />
    
                  <div className="detail">
                    <h1 className='itemTitle'>{faculty.emp_name}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Employe No</span>
                      <span className="itemValue">{faculty.id}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">gender</span>
                      <span className="itemValue">{faculty.gender}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">NIC</span>
                      <span className="itemValue">{faculty.nic}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Employe Type</span>
                      <span className="itemValue">{faculty.emp_type}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Designation</span>
                      <span className="itemValue">{faculty.designation}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Faculty Code</span>
                      <span className="itemValue">{faculty.faculty_code}</span>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="right">
              <Chart aspect={2.7/1}/>
              </div>
    
            </div>
    
            <div className="bottom">
            <h1 className="title">Courses</h1>
    
              <DataTableForCourse/>
    
            </div>
            
        
        </div>
        </div>
      ) : (
        <p>Loading students data...</p>
      )}
    </div>
  );
};

export default ViewPageForFaculty;
