import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './ListFaculty.scss'

import DataTableForFaculty from '../../Components/DataTableForFaculty/DataTableForFaculty'

const ListCourses = () => {
  return (
    <div className='listCourse'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTableForFaculty />
      </div>
      
    </div>
  )
}

export default ListCourses