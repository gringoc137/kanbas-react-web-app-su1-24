import { FaPlus, FaEllipsisV } from "react-icons/fa";
import React, { useState } from 'react';
import GreenCheckmark from "./GreenCheckmark";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AssignmentControls(){
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      };
    return(
        // <div id="wd-assignment-controls" className="row text-nowrap">
        //     <div className="input-group col-4">
        //         <span className="input-group-text"><PiMagnifyingGlassLight /></span>
        //         <input type="search" style={{width: "1px"}} className="form-control"
        //     id="input1" placeholder="Search..." />
        //     </div>


        //     <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        //     <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        //      Assignment
        //     </button>

        //     <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        //     <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        //      Group
        //     </button>

            


        // </div>

        <div className="row top-bar">
        <div className="col-4">
          <input type="text" className="form-control" placeholder="Search for Assignment" onChange={handleChange}/>
        </div>
        <div className="col top-button-bar d-flex justify-content-end">
          <a><FaPlus /> Group </a>
    
          <a className = "red" ><FaPlus /> Assignment </a>
    
          <a> <FaEllipsisV className="me-2 custom" /> </a>
        </div>
      </div>
    );

}