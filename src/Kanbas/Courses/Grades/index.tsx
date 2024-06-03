import { IoSettingsOutline } from "react-icons/io5";
import { LiaFileExportSolid } from "react-icons/lia";
import { FaCaretDown } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { CiFilter } from "react-icons/ci";
import "./index.css"
import { useState } from "react";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
export default function Grades() {
    const { cid } = useParams();
    const filteredAssignments = assignments.filter(
        (assignment) =>
          assignment.course === cid 
      );
    
      const filteredEnrollments = enrollments.filter(
        (enrollment) =>
          enrollment.course === cid 
      );
    return (
        <div id="wd-grades">
            <div id="wd-grades-controls" className="text-nowrap">
                <button id="wd-gear-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <IoSettingsOutline />
                </button>

                <button id="wd-export-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <LiaFileExportSolid className="fs2" />Export
                    <FaCaretDown />

                </button>

                <button id="wd-import-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <LiaFileImportSolid className="fs2" />Import


                </button>
            </div> <br /><br />

            <div id="wd-search-form">
                <form>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="wd-search-student" className="fs-6">
                                Student Names</label>
                            <div className="input-group">
                                <span className="input-group-text"><PiMagnifyingGlassLight /></span>
                                <input type="text" id="wd-search-student" className="form-control" placeholder="Search Students" />
                                <span className="input-group-text"><FaCaretDown /></span>
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="wd-search-assignment" className="fs-6">
                                Assignment Names </label>
                            <div className="input-group">
                                <span className="input-group-text"><PiMagnifyingGlassLight /></span>
                                <input type="text" id="wd-search-assignment" className="form-control" placeholder="Search Assignments" />
                                <span className="input-group-text"><FaCaretDown /></span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div id="wd-apply-filters">
                <button id="wd-apply-filters-btn" className="btn btn-lg  me-1 ">
                    <CiFilter className="fs2" />Apply Filter
                </button>

            </div>

            <div id="wd-grade-table">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Student Name</th>
                                {filteredAssignments.map((assignment) => (
                                <th key={assignment._id}>{assignment.title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody >
                        {filteredEnrollments.map((enrollment, index) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr >
                  <th>
                    {user?.firstName} {user?.lastName}
                  </th>
                  {filteredAssignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td key={assignment._id}>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    );
}