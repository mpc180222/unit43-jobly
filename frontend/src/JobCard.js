import React from "react";
import { useParams, Link } from "react-router-dom";
import "./jobCard.css"

function JobCard({title, salary, equity, id, companyName, applications, applyJob, username }){

let applied = applications.find(num=> num === id);

return(<div class = "card">
    <h2>{title}</h2>
    <p>Salary: {salary}</p>
    <p>Equity: {equity}</p>
    {companyName && <p>{companyName}</p>}
    {!applied && <button class="button-class" onClick = {() => applyJob(username, id)}>Apply</button>}
    {applied && <button class="disabled-button" disabled = {true}>Applied</button>}
    
</div>)


}

export default JobCard;