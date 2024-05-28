import { Navigate,Routes ,Route} from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <table border={1} width="100%">
            <tr>
                <td valign="top"><KanbasNavigation/></td>
                <td valign="top">
                    <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="/Courses/:cid/*" element={<Courses />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />

                    </Routes>
                </td>
            </tr>
        </table>
        
        
      </div>
  );}
  