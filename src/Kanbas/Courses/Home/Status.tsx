import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaFileImport } from "react-icons/fa";
import { TbViewfinder } from "react-icons/tb";
import { IoIosStats } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { SiSimpleanalytics } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";


export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish  </button> </div>
            <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" />
            Publish</button></div></div> <br />
            {/* Complete on your own */}
            
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" />
            Import Existing Content</button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <FaFileImport className="me-2 fs-5" />Import from Commons</button><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TbViewfinder className="me-2 fs-5" />
        Choose Home Page</button> 
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoIosStats className="me-2 fs-5" />
        View Course Stream</button><br />
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <GrAnnounce className="me-2 fs-5" />
        New Announcement</button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <SiSimpleanalytics className="me-2 fs-5" />New Analytics</button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoMdNotificationsOutline className="me-2 fs-5" />View Course Notifications</button>
            
        </div>

    );}