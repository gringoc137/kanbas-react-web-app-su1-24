import React, { useState } from 'react';
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaCheckCircle, FaEllipsisV, FaBook } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import GreenCheckmark from "./GreenCheckmark";
import { PiNotePencilBold } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === cid); 
  console.log(cid);

  return (
    <div id="wd-assignments">

      {/* <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button> */}
      <AssignmentControls /> <hr></hr>

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
            <IoMdArrowDropdown className="me-2 fs-4" />

            <b>Assignments</b>
            <div className="float-end">
              <span className='percent-box'>
                40% of total
              </span>
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />

              <IoEllipsisVertical className="fs-4" />
            </div>

          </div>


          <ul className="wd-assignments list-group rounded-0" >
            {assignmentList.map((assignment) => (
              <li className="assignment-list-container">
                <div className = "assignment-list-left-icons">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotePencilBold className="me-2 list-icon" />
                </div>
                <div className = "assignment-list">
                  <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</Link>

                  <p className="assignent-sub-text"> <span className="red-text">Multiple Modules</span>  | <span className="bold"> Not available until </span> May 6 at 12:00 AM | Due May 13 at 11:59 PM | 100pts </p>
                </div>
                  <div className = "assignment-list-right-icons">
                    <FaTrash className="text-danger" />
                    <FaCheckCircle className="text-success" />
                    <IoEllipsisVertical className="three-dot-icon fs-4" />
                  </div>
              </li>
            ))}
          </ul>
        </li>

      </ul>
    </div>
  );
}
