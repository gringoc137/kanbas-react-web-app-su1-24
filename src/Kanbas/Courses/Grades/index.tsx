import { IoSettingsOutline } from "react-icons/io5";
import { LiaFileExportSolid } from "react-icons/lia";
import { FaCaretDown } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { CiFilter } from "react-icons/ci";
import "./index.css"
export default function Grades() {
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
                                <th scope="col">A1 SETUP <br /><span className="lil">Out of 100</span></th>
                                <th scope="col">A2 HTML  <br /><span className="lil">Out of 100</span></th>
                                <th scope="col">A3 CSS  <br /><span className="lil">Out of 100</span></th>
                                <th scope="col">A4 BOOTSTRAP  <br /><span className="lil">Out of 100</span></th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <th scope="row">Athul Dinesh</th>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <th scope="row">Abhijith Urs</th>
                                <td>20%</td>
                                <td>20%</td>
                                <td>20%</td>
                                <td>21%</td>
                            </tr>
                            <tr>
                                <th scope="row">Vinay Ganesh</th>
                                <td>99%</td>
                                <td><input type="text" id="wd-grade-student" className="form-control" placeholder="99" /></td>
                                <td>99%</td>
                                <td>99%</td>
                            </tr>
                            <tr>
                                <th scope="row">Vamsee</th>
                                <td>95%</td>
                                <td>95%</td>
                                <td>95%</td>
                                <td>95%</td>
                            </tr>
                            <tr>
                                <th scope="row">Sai</th>
                                <td>1%</td>
                                <td>2%</td>
                                <td>3%</td>
                                <td>4%</td>
                            </tr>
                            <tr>
                                <th scope="row">Amit Mishra</th>
                                <td>91%</td>
                                <td>92%</td>
                                <td>93%</td>
                                <td>94%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    );
}