import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import {useLocation} from "react-router";

export default function KanbasNavigation() {
    const location = useLocation();
    const { pathname } = location;

    const notActive = "list-group-item text-white bg-black text-center border-0";
    const active = "list-group-item text-center border-0 bg-white text-danger";

    return (
        <div id="wd-kanbas-navigation" 
         style={{ width: 120 }} className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0">
            <img src="/images/NEU.svg" width="75px" /> </a>
            <a id="wd-account-link" href="#/Kanbas/Account" className={pathname.includes("Account") ? active : notActive}>
        <FaRegCircleUser className="fs-1 text text-white" /><br />Account</a>
            <a id="wd-dashboard-link" href="#/Kanbas/Dashboard" className={pathname.includes("Dashboard") ? active : notActive}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />Dashboard</a>
            <a id="wd-course-link" href="#/Kanbas/Courses" className={pathname.includes("Courses") ? active : notActive}>
        <LiaBookSolid className="fs-1 text-danger" /><br />Courses</a>
            <a id="wd-calendar-link" href="#/Kanbas/Calendar" className={pathname.includes("Calendar") ? active : notActive}>
        <FaCalendarAlt className="fs-1 text-danger" /><br />Calendar</a>
            <a id="wd-inbox-link" href="#/Kanbas/Inbox" className={pathname.includes("Inbox") ? active : notActive}>
        <FiInbox className="fs-1 text-danger" /><br />Inbox</a>
            <a id="wd-labs-link" href="#/Labs" className={pathname.includes("Labs") ? active : notActive}>
        <IoSettingsSharp className="fs-1 text-danger" /><br />Labs</a>
            <a id="wd-labs-link" href="#/Labs" className={pathname.includes("Labs") ? active : notActive}>
        <GoHome className="fs-1 text-danger" /><br />Landing Page</a>
        </div>
    );}
