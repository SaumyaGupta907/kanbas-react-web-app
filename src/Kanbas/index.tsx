import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import {Navigate, Route, Routes} from "react-router";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import "./styles.css";
import {useState,useEffect} from "react";
import * as client from "./Courses/client";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const fetchCourses = async () => {
      const courses = await client.fetchAllCourses();
      setCourses(courses);
    };
    useEffect(() => {
      fetchCourses();
    }, []);
  

    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "wizard.jpg", description: "New Description"
    });

    const addNewCourse = async () => {
        const newCourse = await client.createCourse(course);

        setCourses([...courses, {...course, ...newCourse}]);
    };

    const updateCourse = async () => {
        await client.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if(c._id === course._id) return course;
                else return c;
            })
        );
    }

    const deleteCourse = async (courseId: string) =>{
        await client.deleteCourse(courseId)
        setCourses(courses.filter((course) => course._id !== courseId));
    }

    return (
        <Provider store={store}>
            <div id="wd-kanbas" >
            <KanbasNavigation/>
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard"/>}/>
                    <Route path="/Account/*" element={<Account />} />
                        <Route path="Dashboard" element={<ProtectedRoute><Dashboard  courses={courses}
                                                                     course={course}
                                                                     setCourse={setCourse}
                                                                     addNewCourse={addNewCourse}
                                                                     deleteCourse={deleteCourse}
                                                                     updateCourse={updateCourse}/></ProtectedRoute>}/>
                        <Route path="Courses/:id/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>}/>
                        <Route path="Courses" element={<Courses courses={courses}/>}/>
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                            <Route path="Inbox" element={<h1>Inbox</h1>} />
                        
                </Routes>
            </div>
     </div>
        </Provider>
);}
