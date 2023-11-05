import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './ViewForStudents.scss'
import Chart from '../../Components/Chart/Chart'
import DataTableForCourse from '../../Components/DataTableForCourse/DataTableForCourse';

const ViewForStudents = () => {
  const { studentsId } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`http://localhost:8088/students/`);
        // console.log(res.data)

        // const foundUser = res.data.find(user => user.id === userId);

        // pehle hum ye use kar rhe the  jis s data nahi arha tha phr hum ne ise parsint banaya to data agaya 

        const foundStudent = res.data.find(student => student.id === studentsId);
        console.log(foundStudent)
        setStudent(foundStudent);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudents();
  }, [studentsId]);

  //  separate useEffect for logging
  useEffect(() => {
    if (student) {
    //   console.log(user);
    }
  }, [student]);

  return (

    // <div>Hello</div>
    <div>
      {/* <h1>User ID: {userId}</h1> */}
      {student ? (
          <div className='Single'>
          <Sidebar/>
          <div className="singleContainer">
            <Navbar/>
            <div className="top">
              <div className="left">
                <div className="editBtn">
                  <button>{studentsId}</button></div>
                <h1 className="title">INFORMATION</h1>
                <div className="item">
                  <img className='itemImg' src="/student.png" alt="img"  />
    
                  <div className="detail">
                    <h1 className='itemTitle'>{student.name}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Father Name</span>
                      <span className="itemValue">{student.father_name}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Enrollment No</span>
                      <span className="itemValue">{student.enrollment_number}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Seat No</span>
                      <span className="itemValue">{student.seat_number}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{student.email}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Batch</span>
                      <span className="itemValue">{student.batch}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Program</span>
                      <span className="itemValue">{student.program}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Major</span>
                      <span className="itemValue">{student.major}</span>
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

export default ViewForStudents;
