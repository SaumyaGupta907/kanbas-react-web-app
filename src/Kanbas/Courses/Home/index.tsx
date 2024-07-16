import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div className="row">
            <div className="col-8">
                <Modules />
            </div>
            <div className="col-4">
                <CourseStatus />
            </div>
        </div>
    );
}
