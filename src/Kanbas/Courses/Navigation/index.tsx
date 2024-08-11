import "./index.css";
import {useLocation, useParams} from "react-router";

export default function CoursesNavigation() {
    const location = useLocation();
    const { pathname } = location;

    const {id} = useParams();

    const notActive = "list-group-item text-danger border border-0";
    const active = "list-group-item active border border-0";

    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div className="col-lg-2 col-md-3 d-none d-md-block">
            <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
                {links.map((link) => (
                    <a id={`wd-course-${link.toLowerCase()}-link`} href={`#/Kanbas/Courses/${id}/${link}`} className={pathname.includes(`${link}`) ? active : notActive}>
                        {link}
                    </a>
                ))}
                </div>
        </div>
    );}
