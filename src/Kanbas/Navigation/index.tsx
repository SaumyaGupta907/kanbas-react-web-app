import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FiInbox } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
    const location = useLocation();
    const notActive = "list-group-item text-white bg-black text-center border-0";
    const active = "list-group-item text-center border-0 bg-white text-danger";
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
        { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
        { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
        { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
        // { label: "Home",      path: "/Home",             icon: GoHome }
    ];


    return (
        <div id="wd-kanbas-navigation" 
         style={{ width: 120 }} className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0">
            <img src="/images/NEU.svg" width="75px" /> </a>
            <Link key="/Kanbas/Account" to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}
        </div>
    );}
