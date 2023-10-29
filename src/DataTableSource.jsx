
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
    { field: 'id', headerName: 'C-Code', width: 80 },

    {
        field: "course_title",
        headerName: "Course Title",
        width: 290,
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
    { field: 'credit_hr_th', headerName: 'Cr hr (TH) ', width: 90 },
    { field: 'credit_hr_pr', headerName: 'Cr hr (PR) ', width: 90 },
    { field: 'program', headerName: 'Program', width: 90 },
    { field: 'major', headerName: 'Major', width: 90 },
    { field: 'semester', headerName: 'Semester', width: 90 },
    { field: 'session', headerName: 'Session', width: 80 },
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

