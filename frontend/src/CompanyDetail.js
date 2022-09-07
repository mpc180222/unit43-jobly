import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import TokenContext from "./tokenContext";
import "./companyDetail.css";

function CompanyDetail({applyJob}){

    const [companyInfo, setCompanyInfo] = useState(null);
    const {handle} = useParams();

    useEffect(() => {
        async function getCompanyJobs(){
          let res = await JoblyApi.getCompany(handle);
          setCompanyInfo(res);
        }
        getCompanyJobs();
      }, [])
    
      let loggedInUser = useContext(TokenContext);

  if(!loggedInUser){

    return(<div>
      <h2>You must be logged in to view a company's details.</h2>
    </div>)
  }

   

return(<div className="company-container">
    <h1>{companyInfo && companyInfo.name}</h1>
    <h4>{companyInfo && companyInfo.description}</h4>
    {companyInfo && companyInfo.jobs.map(j=> <JobCard title = {j.title}
    id = {j.id} salary = {j.salary} equity = {j.equity}
    applyJob = {applyJob} username = {loggedInUser.username} applications = {loggedInUser.applications}></JobCard> )}
</div>)


}

export default CompanyDetail;