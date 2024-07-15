import './styles.css';
import {FaGear} from "react-icons/fa6";
import {FaFileExport, FaFileImport, FaFilter, FaSearch} from "react-icons/fa";

export default function Grades() {
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
                        <input type="text" className="search-input form-control"
                               placeholder="Search Students" />
                    </div>
                </div>
                <div className="col-6">
                    <p className="fw-bold">Assignment Names</p>
                    <div className="search-container">
                        <FaSearch className="fas search-icon"/>
                        <input type="text" className="search-input form-control"
                               placeholder="Search Assignments" />
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-light my-3 mx-1"><FaFilter className="mx-1"/>Apply Filters</button>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-striped-red text-center">
                    <thead>
                    <tr></tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Student Name</th>
                        <th>A1 SETUP<br /><span className="text-muted">Out of 100</span></th>
                        <th>A2 HTML<br /><span className="text-muted">Out of 100</span></th>
                        <th>A3 CSS<br/><span className="text-muted">Out of 100</span></th>
                        <th>A4 BOOTSTRAP<br/><span className="text-muted">Out of 100</span></th>
                    </tr>
                    <tr>
                        <td className="student-name">Jane Adams</td>
                        <td>100</td>
                        <td><input type="number" value="97" /></td>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className="student-name">Alice Wonderland</td>
                        <td>100</td>
                        <td>91</td>
                        <td>100</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td className="student-name">Bob Marrot</td>
                        <td><input type="number" value="90" /></td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className="student-name">Darth Vader</td>
                        <td>100</td>
                        <td><input type="number" value="91" /></td>
                        <td>100</td>
                        <td><input type="number" value="89" /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}