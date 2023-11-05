
export const userColums = [
    { field: 'id', headerName: 'ID', width: 70 },

    {
        field: "user",
        headerName: "User",
        width: 290,
        renderCell: (params) => {

            // const imageUrl = URL.createObjectURL(new Blob([new Uint8Array(params.row.image.data)]));

            // {console.log(params.row.image)}
            return (

               
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={imageUrl} alt={params.row.name} 
                    
                    /> */}
                    {params.row.userName}

                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'UserType', headerName: 'User Type', width: 130,

    renderCell: (params) => {
        return (
           <div>
            {params.row.userType}
           </div>
        )
    }
},
    {
        field: 'status', headerName: 'Status', width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {
                        params.row.status
                    }
                </div>
            )
        }
    },
]
export const userColumsForCourse = [
    { field: 'id', headerName: 'C-Code', width: 130 },

    {
        field: "course_title",
        headerName: "Course Title",
        width: 330,
        renderCell: (params) => {

            // const imageUrl = URL.createObjectURL(new Blob([new Uint8Array(params.row.image.data)]));

            // {console.log(params.row.image)}
            return (

               
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={imageUrl} alt={params.row.name} 
                    
                    /> */}
                    {params.row.course_title}

                </div>
            )
        }
    },
    { field: 'credit_hr_th', headerName: 'Cr hr (TH) ', width: 130 },
    { field: 'credit_hr_pr', headerName: 'Cr hr (PR) ', width: 130 },
    // { field: 'program', headerName: 'Program', width: 90 },
    // { field: 'major', headerName: 'Major', width: 90 },
    // { field: 'semester', headerName: 'Semester', width: 90 },
    // { field: 'session', headerName: 'Session', width: 80 },
//     { field: 'credit_hr_pr', headerName: 'Cr hr (TH)', width: 130,

//     renderCell: (params) => {
//         return (
//            <div>
//             {params.row.userType}
//            </div>
//         )
//     }
// },
//     {
//         field: 'status', headerName: 'Status', width: 160,
//         renderCell: (params) => {
//             return (
//                 <div className={`cellWithStatus ${params.row.status}`}>
//                     {
//                         params.row.status
//                     }
//                 </div>
//             )
//         }
//     },
]
export const userColumsForStudents = [
    { field: 'id', headerName: 'Roll-No', width: 130 },

    {
        field: "name",
        headerName: "Name",
        width: 170,
        renderCell: (params) => {

            // const imageUrl = URL.createObjectURL(new Blob([new Uint8Array(params.row.image.data)]));

            // {console.log(params.row.image)}
            return (

               
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={imageUrl} alt={params.row.name} 
                    
                    /> */}
                    {params.row.name}

                </div>
            )
        }
    },
    { field: 'enrollment_number', headerName: 'Enrollment-No', width: 140 },
    { field: 'seat_number', headerName: 'Seat-No', width: 90 },
    { field: 'email', headerName: 'Email', width: 110 },
    { field: 'semester', headerName: 'Semester', width: 90 },
    { field: 'batch', headerName: 'Batch', width: 90 },
    { field: 'program', headerName: 'Program', width: 80 },
    { field: 'major', headerName: 'Major', width: 80 },
//     { field: 'credit_hr_pr', headerName: 'Cr hr (TH)', width: 130,

//     renderCell: (params) => {
//         return (
//            <div>
//             {params.row.userType}
//            </div>
//         )
//     }
// },
//     {
//         field: 'status', headerName: 'Status', width: 160,
//         renderCell: (params) => {
//             return (
//                 <div className={`cellWithStatus ${params.row.status}`}>
//                     {
//                         params.row.status
//                     }
//                 </div>
//             )
//         }
//     },
]
export const ColumsForFaculty= [
    { field: 'id', headerName: 'Emp-No', width: 100 },

    {
        field: "emp_name",
        headerName: "E-Name",
        width: 220,
        renderCell: (params) => {

            // const imageUrl = URL.createObjectURL(new Blob([new Uint8Array(params.row.image.data)]));

            // {console.log(params.row.image)}
            return (

               
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={imageUrl} alt={params.row.name} 
                    
                    /> */}
                    {params.row.emp_name}

                </div>
            )
        }
    },
    { field: 'gender', headerName: 'Gender', width: 120 },
    { field: 'nic', headerName: 'NIC', width: 160 },
    { field: 'program', headerName: 'Program', width: 100 },
    { field: 'emp_type', headerName: 'Emp-Type', width: 130 },
    { field: 'designation', headerName: 'Designation', width: 180,
    renderCell: (params) => {
        return (
            <div className={`cellWithFaculty ${params.row.designation}`}>
                {
                    params.row.designation
                }
            </div>
        )
    } 

            
},
   
]

// export const userData = [
//     {
//         id: 1,
//         name: "Ghazanfarullah Khan",
//         img: "/sir.jpeg",
//         email: "ghazanfarkhan@uit.edu",
//         UserType: "Dr Prof",
//         status: "Active"

//     },

//     {
//         id: 2,
//         name: "Muhammad Noman",
//         img: "/noman.jpg",
//         email: "noman@uit.edu",
//         UserType: "Student",
//         status: "InActive"

//     },

//     {
//         id: 3,
//         name: "Rabia Bilal",
//         img: "/sample.jpg",
//         email: "rbilal@uit.edu",
//         UserType: "Egr, Prof",
//         status: "Active"

//     },

//     {
//         id: 4,
//         name: "Raza Muhammad ",
//         img: "/noman.jpg",
//         email: "rmuhammad@uit.edu",
//         UserType: "Dr Prof",
//         status: "Active"

//     },

//     {
//         id: 5,
//         name: "Sheraz Ahmed",
//         img: "/noman.jpg",
//         email: "noman@uit.edu",
//         UserType: "Student",
//         status: "InActive"

//     },

//     {
//         id: 6,
//         name: "Ayesha Usman",
//         img: "/sample.jpg",
//         email: "rbilal@uit.edu",
//         UserType: "Egr, Prof",
//         status: "Active"

//     },
//     {
//         id: 4,
//         name: "Raza Muhammad ",
//         img: "/noman.jpg",
//         email: "rmuhammad@uit.edu",
//         UserType: "Dr Prof",
//         status: "Active"

//     },

//     {
//         id: 5,
//         name: "Sheraz Ahmed",
//         img: "/noman.jpg",
//         email: "noman@uit.edu",
//         UserType: "Student",
//         status: "InActive"

//     },

//     {
//         id: 6,
//         name: "Ayesha Usman",
//         img: "/sample.jpg",
//         email: "rbilal@uit.edu",
//         UserType: "Egr, Prof",
//         status: "Active"

//     },
//     {
//         id: 4,
//         name: "Raza Muhammad ",
//         img: "/noman.jpg",
//         email: "rmuhammad@uit.edu",
//         UserType: "Dr Prof",
//         status: "Active"

//     },

//     {
//         id: 5,
//         name: "Sheraz Ahmed",
//         img: "/noman.jpg",
//         email: "noman@uit.edu",
//         UserType: "Student",
//         status: "InActive"

//     },

//     {
//         id: 6,
//         name: "Ayesha Usman",
//         img: "/sample.jpg",
//         email: "rbilal@uit.edu",
//         UserType: "Egr, Prof",
//         status: "Active"

//     },

// ]

