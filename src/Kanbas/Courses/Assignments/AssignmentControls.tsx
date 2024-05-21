import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { PiMagnifyingGlassLight } from "react-icons/pi";
export default function AssignmentControls(){
    return(
        <div id="wd-assignment-controls" className="text-nowrap">
            <div className="input-group">
                <span className="input-group-text"><PiMagnifyingGlassLight /></span>
                <input type="search" style={{width: "1px"}} className="form-control"
            id="input1" placeholder="Search..." />
            </div>


            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
             Assignment
            </button>

            <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
             Group
            </button>

            


        </div>
    );

}