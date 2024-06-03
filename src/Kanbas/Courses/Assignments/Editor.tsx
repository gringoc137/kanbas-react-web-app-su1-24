import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === aid);
  console.log(assignment);
  return (


    <div id="wd-assignments-editor" className="d-flex flex-column">
      <div className="mb-3">
        <label htmlFor="asg-name" className="form-label">
          Assignment Name</label>
        <input type="text" className="form-control"
          id="asg-name" value={assignment?.title} />
      </div>
      <div id="wd-asg-desc">
        <textarea className="form-control" id="asg-desc"
          rows={3}>
          The assignment is available online

          Submit a link to the landing page of your Web application running on Netlify.
          The landing page should include the following: Your full name and section,Links to each of the lab assignments,
          Link to the Kanbas application, Links to all relevant source code repositories.
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
      </div>
      <form>
        <div className="row mb-3">
          <label htmlFor="r1" className="col-sm-2 col-form-label">
            Points </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="r1" placeholder="100" />
          </div>
        </div>


        <div className="row mb-3">
          <label htmlFor="r2" className="col-sm-2 col-form-label">
            Assignment Group </label>
          <div className="col-sm-10">
            <select className="form-select col-sm-2 col-form-label" id="r2">
              <option selected>ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="r3" className="col-sm-2 col-form-label">
            Display Grade as </label>
          <div className="col-sm-10">
            <select className="form-select col-sm-2 col-form-label" id="r3">
              <option selected>Percentage</option>
            </select>
          </div>
        </div>


        <div className="row mb-3">
          <label htmlFor="r5" className="col-sm-2 col-form-label">
            Submission Type </label>
          <form className="col-sm-10" id="r5">
            <select className="form-select col-sm-2 col-form-label" >
              <option selected>Online</option>
            </select>
            <legend className="col-form-label col-sm-2 pt-0">
              Online Entry Options</legend>
            <div className="col-sm-10">
              <div className="form-check col-sm-2 col-form-label">
                <input className="form-check-input" type="checkbox"
                  name="gridRadios" id="r6" value="option1" checked />
                <label className="form-check-label" htmlFor="r6">
                  Text Entry </label>

              </div>
              <div className="form-check col-sm-2 col-form-label">
                <input className="form-check-input" type="checkbox"
                  name="gridRadios" id="r7" value="option2" />
                <label className="form-check-label" htmlFor="r7">
                  Website URL </label>

              </div>

              <div className="form-check col-sm-2 col-form-label">
                <input className="form-check-input" type="checkbox"
                  name="gridRadios" id="r8" value="option3" />
                <label className="form-check-label" htmlFor="r8">
                  Media Recordings </label>

              </div>

              <div className="form-check col-sm-2 col-form-label">
                <input className="form-check-input" type="checkbox"
                  name="gridRadios" id="r9" value="option4" />
                <label className="form-check-label" htmlFor="r9">
                  Student Annotation </label>

              </div>

              <div className="form-check col-sm-2 col-form-label">
                <input className="form-check-input" type="checkbox"
                  name="gridRadios" id="r10" value="option5" />
                <label className="form-check-label" htmlFor="r10">
                  File Uploads </label>

              </div>


            </div>
          </form>
        </div>

        <div className="row mb-3">
          <label htmlFor="r11" className="col-sm-2 col-form-label">
            Assign </label>
          <form className="col-sm-10" id="r11">
            <label htmlFor="r12" className="col-sm-2 col-form-label">
              Assign to </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="r12" placeholder="Everyone" />
            </div>
            <label htmlFor="r13" className="col-sm-2 col-form-label">
              Due</label>
            <div className="col-sm-10">
              <input type="date"
                id="r13"
                value="2024-05-13" />
            </div>
            <label htmlFor="r14" className="col-sm-2 col-form-label">
              Available From</label>
            <div className="col-sm-10">
              <input type="date"
                id="r14"
                value="2024-05-13" />
            </div>

            <label htmlFor="r15" className="col-sm-2 col-form-label">
              Until</label>
            <div className="col-sm-10">
              <input type="date"
                id="r15"
                value="2024-05-13" />
            </div>





          </form>



        </div>



      </form>
   <div>
<button id="wd-cancel-btn" className="btn btn-secondary">
Cancel
</button>
<button id="wd-save-btn" className="btn btn-danger">
Save
</button>

   </div>

    </div>
  );
}
