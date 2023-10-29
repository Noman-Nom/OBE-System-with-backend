import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './ListCourses.scss'
import DataTableForCourse from '../../Components/DataTableForCourse/DataTableForCourse'

const ListCourses = () => {
  return (
    <div className='listCourse'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTableForCourse />
      </div>
      
    </div>
  )
}

export default ListCourses