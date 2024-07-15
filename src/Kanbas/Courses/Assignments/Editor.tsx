import './styles.css';

export default function AssignmentEditor() {
    return (
        <div>
            <label>Assignment Name</label>
            <input type="text" className="form-control mb-4" value="A1" />
            <textarea className="form-control resize">This assignment just a dummy assignment edit page. Keep it posted.</textarea>
            <div className="row p-3">
                <div className="col-10">
                    <div className="row my-4">
                        <div className="col-4 text-end">
                            <label>Points</label>
                        </div>
                        <div className="col-8">
                            <input type="text" className="form-control" value="100" />
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
                                <input className="form-check-input" type="checkbox"
                                       value="" id="flexCheckDefault" />
                                    <label className="form-check-label"
                                           htmlFor="flexCheckDefault">
                                        Do not count this assignment towards final
                                        grade.
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
                                        <input className="form-check-input"
                                               type="checkbox" />
                                            <label className="form-check-label">Text
                                                Entry</label><br/>
                                            <input className="form-check-input"
                                                   type="checkbox" checked />
                                                <label className="form-check-label">Website
                                                    URL</label><br/>
                                                <input className="form-check-input"
                                                       type="checkbox" />
                                                    <label className="form-check-label">Media
                                                        Recordings</label><br/>
                                                    <input className="form-check-input"
                                                           type="checkbox" />
                                                        <label
                                                            className="form-check-label">Student
                                                            Annotation</label><br/>
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox" />
                                                            <label
                                                                className="form-check-label">File
                                                                Uploads</label>
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
                                    <input type="date" className="form-control"
                                           value="2024-05-17" />
                                </div>
                                <div className="row my-2">
                                    <div className="col-6">
                                        <p className="fw-bold">Available from</p>
                                        <input type="date" className="form-control"
                                               value="2024-05-10" />
                                    </div>
                                    <div className="col-6">
                                        <p className="fw-bold">Until</p>
                                        <input type="date" className="form-control"
                                               value="2024-05-17" />
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
                        <a href="#/Kanbas/Courses/1234/Assignments" className="btn btn-light">Cancel</a>
                        <a href="#/Kanbas/Courses/1234/Assignments" className="btn btn-danger">Save</a>
                    </div>
            </div>
        </div>
    );}
