import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import {Navigate, Route, Routes, useLocation, useParams} from "react-router";
import {FaAlignJustify, FaBars, FaChevronDown, FaGlasses, FaQuestion} from "react-icons/fa";
import Grades from "./Grades";
import { courses } from "../Database";

import './styles.css';

export default function Courses() {
    const { id } = useParams();
    const course = courses.find((course) => course._id === id);
    const { pathname } = useLocation();

    console.log('Course:', course, 'CID:', id);
    console.log('Courses List:', courses);
    console.log("params",useParams());

    /* let { pathname } = useLocation();
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

    section = decodeURIComponent(section); */

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
            
            <div className="d-md-none">
                <nav className="navbar navbar-dark bg-black">
                    <div
                        className="container-fluid black-navbar d-flex justify-content-between align-items-center">
                                                
                        <button className="navbar-toggler" type="button" data-bs-toggle="modal"
                                data-bs-target="#navbarContentModal">
                            <FaBars />
                        </button>
                        <div className="d-flex align-items-center mx-auto text-danger">
                            HIIIIIIIIIIIIIIIIIIIaa
                        </div>
                        <FaGlasses className="mx-2"/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="modal"
                                data-bs-target="#collapseMenuModal">
                            <FaChevronDown />
                        </button>
                    </div>
                </nav>
            </div>
            <div className="d-md-none modal fade" id="navbarContentModal"
                 aria-labelledby="navbarContentModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content p-4">
                        <button className="close " data-bs-dismiss="modal" aria-label="Close">
                            <div className="float-end" aria-hidden="true">&times;</div>
                        </button>
                        <ul className="flex-column" style={{listStyle: "none"}}>
                            <li className="my-4">
                                <li className="my-4">
                                    <a href="./dashboard/index.html" className="nav-link">
                                        <span className="mx-2">Dashboard</span>
                                    </a>
                                </li>
                                <li className="my-4 mx-3">
                                    <div className="white-selected d-flex justify-content-between"
                                         style={{display: "inline"}}>
                                        <a href="./profile/profile.html" className="nav-link">
                                            <i className="fa-solid fa-user"
                                               style={{color: "grey"}}></i>
                                            <span className="mx-2">Account</span>
                                        </a>
                                        <div className="float-end">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                </li>
                                <li className="my-4 mx-3">
                                    <div className="d-flex justify-content-between"
                                         style={{display: "inline"}}>
                                        <a href="./column2.html" className="nav-link active">
                                            <i className="fa-solid fa-book"></i>
                                            <span className="mx-2">Courses</span>
                                        </a>
                                        <div className="float-end">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                </li>
                                <li className="my-4">
                                    <a href="#" className="nav-link">
                                        <i className="fa-regular fa-calendar-days"></i>
                                        <span className="mx-2">Calendar</span>
                                    </a>
                                </li>
                                <li className="my-4">
                                    <a href="#" className="nav-link">
                                        <i className="fa-solid fa-inbox"></i>
                                        <span className="mx-2">Inbox</span>
                                    </a>
                                </li>
                                <li className="my-4">
                                    <a href="#" className="nav-link">
                                        <i className="fa-solid fa-clock"></i>
                                        <span className="mx-2">History</span>
                                    </a>
                                </li>
                                <li className="my-4 mx-3">
                                    <div className="d-flex justify-content-between"
                                         style={{display: "inline"}}>
                                        <a href="#" className="nav-link">
                                            <FaQuestion />
                                            <span className="mx-2">Help</span>
                                        </a>
                                        <div className="float-end">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-md-none modal fade" id="collapseMenuModal"
                 aria-labelledby="collapseMenuModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content p-4">
                        <button className="close float-end" data-bs-dismiss="modal"
                                aria-label="Close">
                            <div className="float-end" aria-hidden="true">&times;</div>
                        </button>
                        <ul className="modal-sidebar list-group no-border">
                            <li className="list-group-item"><i className="fa-solid fa-house"></i><a
                                href="#/Kanbas/Courses/1234/Home"><span className="mx-1">Home</span></a></li>
                            <li className="list-group-item"><i
                                className="fa-solid fa-network-wired"></i><a href="#"><span
                                className="mx-1">Modules</span></a></li>
                            <li className="list-group-item"><i className="fa-solid fa-wifi"></i><a
                                href="#"><span className="mx-1">Piazza</span></a></li>
                            <li className="list-group-item"><i className="fa-solid fa-wifi"></i><a
                                href="#"><span className="mx-1">Zoom Meetings</span></a></li>
                            <li className="list-group-item"><i
                                className="fa-regular fa-pen-to-square"></i><a
                                href="#/Kanbas/Courses/1234/Assignments"><span
                                className="mx-1">Assignments</span></a></li>
                            <li className="list-group-item"><i className="fa-solid fa-rocket"></i><a
                                href="#"><span className="mx-1">Quizzes</span></a></li>
                            <li className="list-group-item"><i className="fa-solid fa-book"></i><a
                                href="#/Kanbas/Courses/1234/Grades"><span className="mx-1">Grades</span></a></li>
                            <li className="list-group-item"><i
                                className="fa-regular fa-file-lines"></i><a href="#"><span
                                className="mx-1">People</span><i
                                className="fa-regular fa-eye-slash"></i></a></li>
                            <li className="list-group-item"><i
                                className="fa-regular fa-file-lines"></i><a href="#"><span
                                className="mx-1">Settings</span><i
                                className="fa-regular fa-eye-slash"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        
            <div className="d-none d-md-block">
                <hr />
            </div>
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
