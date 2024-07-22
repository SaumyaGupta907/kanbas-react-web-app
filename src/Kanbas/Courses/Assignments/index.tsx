import { FaSearch, FaPlus, FaBook } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignControlButtons from "./AssignControlButtons";

import "./styles.css";

export default function Assignments() {
    const { id } = useParams();  // Get course ID from URL
    const assignments = db.assignments.filter((assignment) => assignment.course === id);

    return (
        <div id="wd-assignments">
            <div className="my-3">
                <div className="search-container">
                    <FaSearch className="fas search-icon" />
                    <input type="text" className="search-input" placeholder="Search ...." />
                    <div className="float-end">
                        <button className="btn btn-light">+Group</button>
                        <button className="btn btn-danger mx-2">+ Assignment</button>
                    </div>
                </div>
            </div>
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="assignments-section">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="mx-1">&#9660;</span>
                            <span className="mx-1">ASSIGNMENTS</span>
                            <div className="float-end">
                                <button className="btn btn-light total">40% of Total</button>
                                <span className="mx-2"><FaPlus /></span>
                                <AssignmentControlButtons />
                            </div>
                        </div>
                        <ul className="wd-assignments list-group rounded-0">
                            {assignments.map((assignment) => (
                                <li key={assignment._id} className="wd-assignment list-group-item p-3 ps-1">
                                    <div className="row">
                                        <div className="col-2 mt-4">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <FaBook style={{ color: "green" }} />
                                        </div>
                                        <div className="col-8 assignment-content">
                                            <Link className="wd-assignment-link" to={`/Kanbas/Courses/${id}/Assignments/${assignment._id}`}>
                                                {assignment.title}
                                            </Link>
                                            <p>
                                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {assignment.availableDate} | <br />
                                                <b>Due </b>
                                                <span className="text-muted">{assignment.dueDate} | {assignment.points}pts</span>
                                            </p>
                                        </div>
                                        <div className="col-2 mt-4">
                                            <AssignControlButtons />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}
