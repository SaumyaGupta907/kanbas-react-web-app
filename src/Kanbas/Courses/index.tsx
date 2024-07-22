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


    const notActive = "list-group-item text-danger border border-0";
    const active = "list-group-item active border border-0";

    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

    return (
        <div id="wd-courses">
            <div className="d-none d-md-block">
                <h2 className="text-danger">
                    <FaAlignJustify className="me-4 fs-4 mb-1" />
                    {course && course.name} &gt; {pathname.split("/")[4]}
                </h2>
            </div>
            <div className="d-md-none">
                <nav className="navbar navbar-dark bg-black">
                    <div
                        className="container-fluid black-navbar d-flex justify-content-between align-items-center">
                                                
                        <button className="navbar-toggler" type="button" data-bs-toggle="modal"
                                data-bs-target="#navbarContentModal">
                            <FaBars />
                        </button>
                        <div className="d-flex align-items-center mx-auto text-danger">
                            <p>{course && course._id}<br/>{pathname.split("/")[4]}</p>
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
                                    <a href="#/Kanbas/Dashboard" className="nav-link">
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
                        <div>
                        <ul className="modal-sidebar list-group no-border">
    {links.map((link) => (
        <li className={`list-group-item ${pathname.includes(link) ? 'active' : ''}`} key={link}>
            <a 
                id={`wd-course-${link.toLowerCase()}-link`} 
                href={`#/Kanbas/Courses/${id}/${link}`}
                className={pathname.includes(link) ? 'active' : 'inactive'}
            >
                <span className="mx-1">{link}</span>
            </a>
        </li>
    ))}
</ul>

                </div>
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
