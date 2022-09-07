import React, {useContext, useState} from "react";
import CompanyCard from "./CompanyCard";
import TokenContext from "./tokenContext";
import "./companiesList.css";

function CompaniesList({companies, companySearch}){
    let loggedInUser = useContext(TokenContext);

    const [searchData, setSearchData] = useState('');

const handleChange = evt => {
    const { name, value } = evt.target;
    setSearchData(searchData => ({
        [name]: value
    }))
}

const handleSubmit = evt => {
    evt.preventDefault();
    companySearch(searchData);
    setSearchData('');
}

if(loggedInUser) return(
    <div class = "companies-list-container">
    <form class="search-form" onSubmit = {handleSubmit}>
    <input type= "text" id= "search" name = "search" value = {searchData.search} 
    placeholder = "Search for a company" onChange = {handleChange}></input>
    <button>Search</button>
    </form>

    {companies.map((company)=> (<div><CompanyCard name = {company.name}
    description = {company.description} logoUrl = {company.logoUrl}
    handle = {company.handle}></CompanyCard></div>) )}
</div>)

return(
    <div>
    <h2>You must be logged in to view companies.</h2>
    </div>
)


}

export default CompaniesList;