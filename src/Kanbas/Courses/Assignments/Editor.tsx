export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
          The assignment is available online
          Submit a link to the landing page of your Web application running on Netlify.
          The landing page should include the following: Your full name and section,Links to each of the lab assignments,
          Link to the Kanbas application, Links to all relevant source code repositories.
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
          <select id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
          <select id="wd-display-grade-as">
            <option value="PERCENTAGE">Percentage</option>
        </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
          <select id="wd-submission-type">
            <option value="ONLINE">Online</option>
        </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            Online Entry Options
          </td>
          <td>
          <input type="checkbox" name="text-entry" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="web-url" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="student-annotation" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" name="file-upload" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
          
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign Assign to</label>
          </td>

          <td>
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-due-date"> Due </label>
        <input type="date"
            id="wd-due-date"
            value="2024-05-13"/><br/>
            </td>
        
        </tr>
        <tr>
            <td>
            <label htmlFor="wd-available-from"> Available from </label>
        <input type="date"
            id="wd-available-from"
            value="2025-05-06"/><br/>
            </td>
            <td>
            <label htmlFor="wd-available-until"> Until </label>
        <input type="date"
            id="wd-available-from"
            value="2024-05-20"/><br/>
            </td>
        
        </tr>
        <tr>
            <td align="right">
            <input type="button" value="Cancel" />
            </td>
            <td >
            <input type="button" value="Save" />
            </td>
        </tr>
        {/* Complete on your own */}
      </table>
    </div>
);}
