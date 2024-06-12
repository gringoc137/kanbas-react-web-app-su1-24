import CoursesNavigation from "./Navigation";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import Grades from "./Grades";
import { FaAlignJustify } from "react-icons/fa6";


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
    return (
      <div id="wd-courses">
        <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}</h2>
        <hr/>

        <div className="d-flex">
    <div className="d-none d-md-block">
                    <CoursesNavigation />
                    </div>
            <div className="flex-fill">        
            <Routes>
            <Route path="/"
                     element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="/Modules" element={<Modules/>} />
              <Route path="/Piazza" element={<h1>Piazza</h1>} />
              <Route path="/Zoom" element={<h1>Zoom</h1>} />
              <Route path="/Assignments" element={<Assignments/>} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
              <Route path="People/:uid" element={<PeopleTable />} />
              <Route path="/Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="/Grades" element={<h1><Grades /></h1>} />
            </Routes>
            </div>
  </div>
          
      </div>
  );}
  