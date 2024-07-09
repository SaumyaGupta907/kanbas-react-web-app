export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br/>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={30} rows={8}>
        The assignment is available online Submit a link to the landing page of your Web application
                running on Netlify. the landing page should include the following: Your full name
                and Section Links to each of the lab assignments Link to Kanbas application Links to
                all relevant source code repositories The Kanbas application should include a link
                to navigate back to the landing page.
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
                    <select id={"wd-group"}>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECT">PROJECT</option>
                    </select>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <select id="wd-display-grade-as">
                        <option value="LetterGrade">LetterGrade</option>
                        <option value="Percentage" selected>Percentage</option>

                    </select>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <select id="wd-submission-type">
                        <option value="Offline">Offline</option>
                        <option value="Online" selected>Online</option>

                    </select>
                </tr>
                <tr>
                    <td>
                    <label>Online Entry Options</label><br/>
                    </td>
                    <tr>
                        <td>
                    <input type="checkbox" name="online-option" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" name="online-option" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label><br/>

                    <input type="checkbox" name="online-option" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                    <input type="checkbox" name="online-option" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                    <input type="checkbox" name="online-option" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label><br/>
                    </td>
                    </tr>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign Assign to</label><br/>
                    </td>
                    <td>
                        <input id="wd-assign-to" value={"Everyone"} />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                <label htmlFor="wd-due-date"> Due </label>
                    </td>

                <input type="date"
                       id="wd-due-date"
                       value="2024-05-13"/><br/>
                </tr>
                <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-available-from"> Available from </label>
                    <tr>
                        <input type="date"
                               id="wd-available-from"
                               value="2024-05-06"/><br/>
                    </tr>
                </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-until"> Until </label>
                        <tr>
                            <input type="date"
                                   id="wd-available-until"
                                   value="2024-05-20"/><br/>

                        </tr>
                    </td>

            </tr>

                <tr>
                    <td align="right" valign="top">
                    <button id="wd-cancel" type="button">
                        Cancel
                    </button>
                    <button id="wd-save" type="button">
                        Save
                    </button>
                    </td>
                </tr>

            </table>
        </div>
    );}
