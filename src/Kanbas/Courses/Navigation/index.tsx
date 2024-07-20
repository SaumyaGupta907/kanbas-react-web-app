import "./index.css";
import {useLocation} from "react-router";

export default function CoursesNavigation() {
    const location = useLocation();
    const { pathname } = location;

    const notActive = "list-group-item text-danger border border-0";
    const active = "list-group-item active border border-0";

    return (
        <div className="col-lg-2 col-md-3 d-none d-md-block">
            <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
                <a id="wd-course-home-link"    href="#/Kanbas/Courses/1234/Home" className={pathname.includes("Home") ? active : notActive}>Home</a>
                <a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules" className={pathname.includes("Modules") ? active : notActive}>Modules
                </a>
                <a id="wd-course-piazza-link"  href="#/Kanbas/Courses/1234/Piazza" className={pathname.includes("Piazza") ? active : notActive}>Piazza</a>
                <a id="wd-course-zoom-link"    href="#/Kanbas/Courses/1234/Zoom" className={pathname.includes("Zoom") ? active : notActive}>Zoom</a>
                <a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments" className={pathname.includes("Assignments") ? active : notActive}>
                    Assignments</a>
                <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes" className={pathname.includes("Quizzes") ? active : notActive}>Quizzes
                </a>
                <a id="wd-course-grades-link"  href="#/Kanbas/Courses/1234/Grades" className={pathname.includes("Grades") ? active : notActive}>Grades</a>
            </div>
        </div>
    );}
