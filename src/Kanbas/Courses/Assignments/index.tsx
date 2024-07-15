import { IoMdSearch } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignControlButtons from  "./AssignControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <IoMdSearch /><input id="wd-search-assignment"
                   placeholder="Search" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            
            
                ASSIGNMENTS 40% of Total <button>+</button>
                <AssignmentControlButtons />
                </div>


                <ul className="wd-assignments list-group rounded-0">


              <li className="wd-assignment list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/123">
                        A1 - ENV + HTML
                    </a>
                    <AssignControlButtons />
              
                    <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <br/><b>Due </b>
                      May 13 at 11:59pm | 100pts
                    </p>
                </li>

                <li className="wd-assignment list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/123">
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <AssignControlButtons />
              
                    <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <br/><b>Due </b>
                    May 20 at 11:59pm | 100pts
                    </p>
                </li>

                <li className="wd-assignment list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/123">
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <AssignControlButtons />
              
                    <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <br/><b>Due </b>
                    May 27 at 11:59pm | 100pts
                    </p>
                </li>

                    </ul>
                </li>
                </ul>
            
        </div>
    );}
