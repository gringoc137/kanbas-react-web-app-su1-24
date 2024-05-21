import { Navigate,Routes ,Route} from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";

export default function Kanbas() {
    return (
      <div id="wd-kanbas" className="h-100">
            <div className="d-flex h-100">
                <div className="d-none d-md-block bg-black h-100">
                <KanbasNavigation/>
                </div>
                <div className="flex-fill p-4">
                    <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="/Courses/:id/*" element={<Courses />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
               
                    </div>
        
      </div>
  );}
  