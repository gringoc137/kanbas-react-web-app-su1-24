import "./index.css";
import { courses } from "../../Database";
import { useParams, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    return (
      <div className="list-group borderless kanbas-account kanbas-column">
            {links.map((link, index) => {
                const isActive = pathname.includes(link);
                return (
                    <a
                        href={`#/Kanbas/Courses/${course?._id}/${link}`}
                        className={`list-group-item ${ isActive ? "kanbas-black" : "kanbas-red" } kanbas-account-border`}
                        key={index}
                    >
                        <div className={isActive ? "kanbas-account-selected" : ""}>{link}</div>
                    </a>
                );
            })}
        </div>
  );}
  