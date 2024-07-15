import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import Grades from "./Grades";

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" />
                Course 1234
            </h2>
            <hr />
            <CoursesNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Grades" element={<Grades />} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:id" element={<AssignmentEditor/>} />
                </Routes>
            </div>
        </div>
    );}
