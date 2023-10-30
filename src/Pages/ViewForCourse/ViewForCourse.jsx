import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './ViewForCourse.scss'
// import Chart from '../../Components/Chart/Chart'
// import DataTable from '../../Components/DataTable/DataTable';

const ViewForCourse = () => {
  const { courseId } = useParams();
    const [course, setCourse] = useState(null)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:8088/courses/`);
        console.log(res.data)

       
        // const foundUser = res.data.find(user => user.id === userId);

   
        const foundCourse = res.data.find(course => course.id === courseId);
        console.log(foundCourse)
        setCourse(foundCourse);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourse();
  }, [courseId]);

  //  separate useEffect for logging
  useEffect(() => {
    if (course) {
    //   console.log(user);
    }
  }, [course]);

  return (
    <div>
      {/* <h1>Course ID: {courseId}</h1> */}
      {course ? (
          <div className='Single'>
          <Sidebar/>
          <div className="singleContainer">
            <Navbar/>
            <div className="top">
              <div className="left">
                <div className="editBtn">
                  <button>{courseId}</button></div>
                <h1 className="title">INFORMATION</h1>
                <div className="item">
                  {/* <img className='itemImg' src="/sir.jpeg" alt="img" /> */}
    
                  <div className="detail">
                    <h1 className='itemTitle'>{course.course_title}</h1>
                    {/* <div className="detailItem">
                      <span className="itemKey">Roll:</span>
                      <span className="itemValue">{user.userType}</span>
                    </div> */}
                    {/* <div className="detailItem">
                      <span className="itemKey">Courses:</span>
                      <span className="itemValue">DSA & DIP </span>
                    </div> */}
                    {/* <div className="detailItem">
                      <span className="itemKey">Department:</span>
                      <span className="itemValue">{user.department}</span>
                    </div> */}
                    {/* <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{user.email}</span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="right">
              {/* <Chart aspect={2.7/1}/> */}
              </div>
    
            </div>
    
            {/* <div className="bottom">
            <h1 className="title">Users:</h1>
    
              <DataTable/>
    
            </div> */}
            
        
        </div>
        </div>
      ) : (
        <p>Loading Course data...</p>
      )}
    </div>
  );
};

export default ViewForCourse;
