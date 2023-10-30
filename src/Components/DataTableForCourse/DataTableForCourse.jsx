import React from "react";
import "./DataTableForCourse.scss";

import { DataGrid } from "@mui/x-data-grid";
import { userColumsForCourse, } from "../../DataTableSource";
import { Link } from "react-router-dom";
import { useState , useEffect } from 'react'
import axios from 'axios'
const DataTableForCourse = () => {


 
  // Actions

  const [courses, setCourses] = useState([])
useEffect(()=>{
    const fetchUsers = async ()=>{
        try {
            const res = await axios.get("http://localhost:8088/courses")
            console.log(res.data)
           setCourses(res.data)

        } catch (error) {
            console.log(error)
        }
    }    
    fetchUsers()

  },[])
  // console.log(users[5])
  // console.log(users)
    

//   const handleDelete = async (id)=>{
//     try {
//       await axios.delete("http://localhost:8088/courses" + id)
//       // window.location.reload() //it is a good practice 
//           //   is ki jagah hum state use kar sakte hen 
//           const updateUsers = users.filter(user=>user.id !==id)
//           setUsers(updateUsers)
//       // console.log(id)

//     } catch (error) {
//       console.log(error)
//     }

//   }


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {

        const data = params.row    // for accessing the data from api 
        //  jab ye nahi lagaya to deletion perform nai hoi thi
        return (
          <div className="cellAction">
            <Link to={`${data.id}`} style={{ textDecoration: "none" }}>
              <button className="viewButton">View</button>
            </Link>
           
              {/* <button className="viewButton">View</button> */}
         
            {/* <button className="deleteButton" onClick={() => handleDelete(data.id)}>Delete</button> */}
            <button className="deleteButton">Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="main">

    
    <div className="dataTable" style={{ height: "640px", width: "100%" }}>

      <div className="addNewButton">
      <p>Add New Course </p>
      <Link to='/user/new' style={{textDecoration:'none'}} className="btn">
     <button>Add New</button>
      </Link>
      </div>
    
      <DataGrid 
        className="dataGrid"
        rows={courses}
        columns={userColumsForCourse.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15]}
        checkboxSelection
      />
    </div>
    </div>
  );
};

export default DataTableForCourse;
