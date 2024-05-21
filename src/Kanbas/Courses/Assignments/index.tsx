import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import GreenCheckmark from "./GreenCheckmark";
import { PiNotePencilBold } from "react-icons/pi";

export default function Assignments() {
    return (
      <div id="wd-assignments">

        {/* <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button> */}
        <AssignmentControls /><br/><br/><br/><br/>

        {/* <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <br/>
            Multiple modules | <b>Not available until</b> May 6 at 12:00am | <br/>
            <b>Due</b> May 13 at 11:59pm | 100pts
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
                 href="#/Kanbas/Courses/1234/Assignments/123">
                A2 - CSS + BOOTSTRAP
            </a>
            <br/>
            Multiple modules | <b>Not available until</b> May 13 at 12:00am | <br/>
            <b>Due</b> May 20 at 11:59pm | 100pts
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
                 href="#/Kanbas/Courses/1234/Assignments/123">
                A3 - JAVASCRIPT + REACT
            </a>
            <br/>
            Multiple modules | <b>Not available until</b> May 20 at 12:00am | <br/>
            <b>Due</b> May 27 at 11:59pm | 100pts
          </li>
        </ul> */}

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-4"/>

            <b>Assignments</b>
            <div className="float-end">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      
              <IoEllipsisVertical className="fs-4" />
            </div>
        
          </div>
          <ul className="wd-assignments list-group rounded-0" >
        <li className="wd-assignment list-group-item p-3 ps-1" style={{borderLeftColor :"green",borderLeftWidth:"3px"}}>
        <BsGripVertical className="me-2 fs-3" />
        <PiNotePencilBold className="me-2 fs-5 text-success"/>
        
        <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1
              <br/>
            Multiple modules | <b>Not available until</b> May 6 at 12:00am | <br/>
            <b>Due</b> May 13 at 11:59pm | 100pts
            </a>
                      
        <div className="float-end">
          <GreenCheckmark />
          <IoEllipsisVertical className="fs-4" />
          </div>
        </li>
        <li className="wd-assignment list-group-item p-3 ps-1" style={{borderLeftColor :"green",borderLeftWidth:"3px"}}>
        <BsGripVertical className="me-2 fs-3" />
        <PiNotePencilBold className="me-2 fs-5 text-success"/>
        
        <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2
              <br/>
              Multiple modules | <b>Not available until</b> May 13 at 12:00am | <br/>
            <b>Due</b> May 20 at 11:59pm | 100pts
            </a>
                      
        <div className="float-end">
          <GreenCheckmark />
          <IoEllipsisVertical className="fs-4" />
          </div>
        </li>
        <li className="wd-assignment list-group-item p-3 ps-1" style={{borderLeftColor :"green",borderLeftWidth:"3px"}}>
        <BsGripVertical className="me-2 fs-3" />
        <PiNotePencilBold className="me-2 fs-5 text-success"/>
        
        <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3
              <br/>
              Multiple modules | <b>Not available until</b> May 20 at 12:00am | <br/>
            <b>Due</b> May 27 at 11:59pm | 100pts
            </a>
                      
        <div className="float-end">
          <GreenCheckmark />
          <IoEllipsisVertical className="fs-4" />
          </div>
        </li>
        </ul>
        </li>

      </ul>
      </div>
  );}
  