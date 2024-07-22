import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import './styles.css';

export default function AssignmentEditor() {
    const { id } = useParams();  // Use 'id' as the route parameter
    const assignment = db.assignments.find(a => a._id === id);

    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    const course = db.courses.find(c => c._id === assignment.course);

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div>
            <label>Assignment Name</label>
            <input type="text" className="form-control mb-4" value={assignment.title} readOnly />
            <textarea className="form-control resize" value={`This is an assignment on ${assignment.title}.`}  />

            <div className="row p-3">
                <div className="col-10">
                    <div className="row my-4">
                        <div className="col-4 text-end">
                            <label>Points</label>
                        </div>
                        <div className="col-8">
                            <input type="text" className="form-control" value={assignment.points} readOnly />
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-4 text-end">
                            <label>Assignment Group</label>
                        </div>
                        <div className="col-8">
                            <select className="form-select">
                                <option selected>ASSIGNMENTS</option>
                                <option value="quiz">QUIZZES</option>
                                <option value="exam">EXAMS</option>
                                <option value="project">PROJECT</option>
                            </select>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-4 text-end">
                            <label>Display Grade as</label>
                        </div>
                        <div className="col-8">
                            <select className="form-select">
                                <option selected>Percentage</option>
                            </select>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Do not count this assignment towards final grade.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-4 text-end">
                            <label>Submission Type</label>
                        </div>
                        <div className="col-8">
                            <div className="submission-type p-3">
                                <select className="form-select">
                                    <option selected>Online</option>
                                </select>
                                <div className="my-2">
                                    <p className="fw-bold">Online Entry Options</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">Text Entry</label><br/>
                                        <input className="form-check-input" type="checkbox" checked />
                                        <label className="form-check-label">Website URL</label><br/>
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">Media Recordings</label><br/>
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">Student Annotation</label><br/>
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">File Uploads</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-4 text-end">
                            <label>Assign</label>
                        </div>
                        <div className="col-8">
                            <div className="assign-to p-3">
                                <p className="fw-bold">Assign To</p>
                                <div className="assign-to p-2">
                                    <div className="inside-assign-to">
                                        <label>Everyone</label>
                                        <label className="float-end">&#10005;</label>
                                    </div>
                                </div>
                                <div className="my-2">
                                    <p className="fw-bold">Due</p>
                                    <input type="date" className="form-control" value={assignment.dueDate} readOnly />
                                </div>
                                <div className="row my-2">
                                    <div className="col-6">
                                        <p className="fw-bold">Available from</p>
                                        <input type="date" className="form-control" value={assignment.availableDate} readOnly />
                                    </div>
                                    <div className="col-6">
                                        <p className="fw-bold">Until</p>
                                        <input type="date" className="form-control" value={assignment.dueDate} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="p-1">
                <input className="form-check-input" type="checkbox" />
                <input className="form-check-input" type="checkbox" />
                <div className="float-end">
                    <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`} className="btn btn-light">Cancel</Link>
                    <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`} className="btn btn-danger">Save</Link>
                </div>
            </div>
        </div>
    );
}
