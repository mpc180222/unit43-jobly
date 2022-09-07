import React, {useContext} from "react";
import TokenContext from "./tokenContext";
import "./home.css"


function Home(){

    let loggedInUser = useContext(TokenContext);


return(<div className = "component-container">
    <div class = "card">
    <h1>Jobly</h1>
    <h3>All the jobs in one, convenient place.</h3>
    {loggedInUser && <h2>Welcome back {loggedInUser.firstName}!</h2>}
    {!loggedInUser && <h2>You are a guest.</h2>}
    </div>
</div>)


}

export default Home;