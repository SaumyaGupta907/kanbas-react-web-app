import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-8 col-md-9 col-sm-12 d-md-block d-sm-block">
                    <Modules />
                </div>
                <div className="col-4 d-none d-lg-block">
                    <CourseStatus />
                </div>
            </div>
        </div>
    );
}
