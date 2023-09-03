import React ,{NavLink}  from "react-router-dom";

const Nav = () => { 

    return(
        <div className="nav">
            <h1>Dictionary App</h1>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/history">History</NavLink>
                </div>  
        </div>
    )
}
export default Nav;