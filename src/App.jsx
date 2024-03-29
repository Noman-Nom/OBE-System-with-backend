import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";

import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";
import { userInputs } from "./formSource";
import "./App.css";

import "./Style/Dark.scss";
import { DarkModeContext } from "./Context/darkModeContext";
import ViewForUsers from "./Pages/ViewForUsers/ViewForUsers";
import ListCourses from "./Pages/ListCourses/ListCourses";
import ListStudents from "./Pages/ListStudents/ListStudents";
import ListFaculty from "./Pages/ListFaculty/ListFaculty";
import ViewForCourse from "./Pages/ViewForCourse/ViewForCourse";
import ViewForStudents from "./Pages/ViewForStudents/ViewForStudents";
import ViewPageForFaculty from "./Pages/ViewPageForFaculty/ViewPageForFaculty";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  // const [dark, setDark] = useState(false)  not efficient for dark mode
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="user">
              <Route index element={<List />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
              {/* <Route path=":userId" element={<Single />} /> */}
              <Route path=":userId" element={<ViewForUsers />} />
            </Route>
            <Route path="courses">
              <Route index element={<ListCourses />} />
              <Route path="new" element={<New />} />
              <Route path=":courseId" element={<ViewForCourse />} />
            </Route>
            <Route path="students">
              <Route index element={<ListStudents />} />
              <Route path="new" element={<New />} />
              <Route path=":studentsId" element={<ViewForStudents />} />
            </Route>
            <Route path="faculty">
              <Route index element={<ListFaculty />} />
              <Route path="new" element={<New />} />
              <Route path=":facultyId" element={<ViewPageForFaculty />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
