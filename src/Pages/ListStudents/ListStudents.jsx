import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './ListStudents.scss'
import DataTableForStudents from '../../Components/DataTableForStudents/DataTableForStudents'


const ListCourses = () => {
  return (
    <div className='listCourse'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTableForStudents />
      </div>
      
    </div>
  )
}

export default ListCourses