import { FaSearch, FaPlus, FaBook } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import * as client from "./client";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignControlButtons from "./AssignControlButtons";

import "./styles.css";
import {useDispatch, useSelector} from "react-redux";

import {deleteAssignment, setAssignments, setAssignment, addAssignment, setAssignmentCourse} from "./reducer";
import {useEffect} from "react";
import {deleteModule} from "../Modules/reducer";

export default function Assignments() {
    const { id } = useParams();  // Get course ID from URL
    let { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();


    const removeAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };

      
    const fetchAssignments = async () => {
        const modules = await client.findAssignmentsForCourse(id as string);
        dispatch(setAssignments(modules));
      };
      useEffect(() => {
        fetchAssignments();
      }, []);
    

    assignments = assignments.filter((assignment: any) => {
        return assignment.course === id;
    });

    useEffect(() => {
        dispatch(setAssignmentCourse(id));
    }, [])


    // @ts-ignore
    const extractMonthAndDay = (dateString) => {
        const date = new Date(dateString);

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const day = date.getDate();
        const monthName = monthNames[date.getMonth()];

        return `${monthName} ${day} at 12:00am`;
    }

    return (
        <div id="wd-assignments">
            <div className="my-3">
                <div className="search-container">
                    <FaSearch className="fas search-icon" />
                    <input type="text" className="search-input" placeholder="Search ...." />
                    <div className="float-end">
                        <button className="btn btn-light">+Group</button>
                        <Link to={`/Kanbas/Courses/${id}/Assignments/-1`}
                              className="btn btn-danger mx-2">
                            + Assignment
                        </Link>
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
                            {assignments.map((assignment: any) => (
                                <li key={assignment._id} className="wd-assignment list-group-item p-3   ps-1">
                                    <div className="row">
                                        <div className="col-2 mt-4">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <FaBook style={{ color: "green" }} />
                                        </div>
                                        <div className="col-8 assignment-content">
                                            <Link className="wd-assignment-link"
                                                  onClick={() => dispatch(setAssignment({...assignment}))}
                                                  to={`/Kanbas/Courses/${id}/Assignments/${assignment._id}`}>
                                                {assignment.title}
                                            </Link>
                                            <p>
                                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {extractMonthAndDay(assignment.availableDate)} | <br />
                                                <b>Due </b>
                                                <span className="text-muted">{extractMonthAndDay(assignment.dueDate)} | {assignment.points}pts</span>
                                            </p>
                                        </div>
                                        <div className="col-2 mt-4">
                                            <AssignControlButtons
                                                assignmentId={assignment._id}
                                                deleteAssignment={(assignmentId) => {removeAssignment(assignmentId)}}/>
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
