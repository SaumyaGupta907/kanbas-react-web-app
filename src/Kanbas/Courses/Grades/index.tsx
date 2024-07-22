import './styles.css';
import { FaGear } from "react-icons/fa6";
import { FaFileExport, FaFileImport, FaFilter, FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Grades() {
    const { id } = useParams();

    const enrollments = db.enrollments.filter(enrollment => enrollment.course === id);
    const students = enrollments.map(enrollment => {
        const user = db.users.find(user => user._id === enrollment.user);
        return { ...user, enrollmentId: enrollment._id };
    });
    const assignments = db.assignments.filter(assignment => assignment.course === id);

    return (
        <div>
            <div className="top-buttons">
                <button className="btn btn-light mx-1"><FaFileImport className="mx-2"/>Import</button>
                <button className="btn btn-light dropdown-toggle mx-1"><FaFileExport className="mx-2"/>Export</button>
                <button className="btn btn-light mx-1"><FaGear /></button>
            </div>
            <div className="row">
                <div className="col-6">
                    <p className="fw-bold">Student Names</p>
                    <div className="search-container">
                        <FaSearch className="fas search-icon"/>
                        <input type="text" className="search-input form-control" placeholder="Search Students" />
                    </div>
                </div>
                <div className="col-6">
                    <p className="fw-bold">Assignment Names</p>
                    <div className="search-container">
                        <FaSearch className="fas search-icon"/>
                        <input type="text" className="search-input form-control" placeholder="Search Assignments" />
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-light my-3 mx-1"><FaFilter className="mx-1"/>Apply Filters</button>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-striped-red text-center">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {assignments.map(assignment => (
                                <th key={assignment._id}>
                                    {assignment.title}<br />
                                    <span className="text-muted">Out of {assignment.points}</span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student._id}>
                                <td className="student-name">{student.firstName} {student.lastName}</td>
                                {assignments.map(assignment => {
                                    const grade = db.grades.find(grade => grade.assignment === assignment._id && grade.student === student._id);
                                    return <td key={assignment._id}>{grade ? grade.grade : "N/A"}</td>;
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
