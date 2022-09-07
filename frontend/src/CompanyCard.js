import React from "react";
import { useParams, Link } from "react-router-dom";
import "./jobCard.css"

function CompanyCard({handle, name, description, logoUrl }){

   

return(<div class = "card">
    <Link to = {`/companies/${handle}`}><h3>{name}</h3></Link>
    <p>{description}</p>
    <img style = {{width: "50px", height: "50px"}}  src = {logoUrl ? `${logoUrl}` : "https://previews.123rf.com/images/urfandadashov/urfandadashov1804/urfandadashov180400262/99679816-world-placeholder-company-logo-design-template-business-corporate-vector-icon.jpg"}></img>
</div>)


}

export default CompanyCard;