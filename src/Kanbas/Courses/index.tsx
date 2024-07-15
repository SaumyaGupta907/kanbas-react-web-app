import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import {Navigate, Route, Routes, useLocation} from "react-router";
import {FaAlignJustify, FaBars} from "react-icons/fa";
import { Breadcrumb } from 'react-bootstrap';
import Grades from "./Grades";

export default function Courses() {
    let { pathname } = useLocation();
    let s = pathname.split("/")
    let subsection = "";
    let pathnameSubsection = "";
    let el = pathname.split("/");
    let section = s[s.length - 1];

    if(pathname.includes("Assignments")) {
        subsection = section === "Assignments" ? "" : "Assignments";
        section = subsection === "" ? "Assignments" : "A1";
    }

    if(section === "Home") {
        section = "Modules";
    }

    section = decodeURIComponent(section);

    return (
        <div id="wd-courses">
            <Breadcrumb>
                <FaBars style={{color: "Red"}} className="mx-3 mt-1"></FaBars>
                <span style={{color: "Red"}}>CS5610</span>
                {(subsection.length > 0) && (
                    <span className="mx-2">{'>'}</span>
                )}
                {(subsection.length > 0) && (
                    <span style={{color: "Red"}}>{subsection}</span>
                )}
                <span className="mx-2">{'>'}</span>
                <span>{section}</span>
            </Breadcrumb>
            <div className="row">
                <div className="col-2"><CoursesNavigation /></div>
                <div className="col-9 p-3">
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
        </div>
    );}
