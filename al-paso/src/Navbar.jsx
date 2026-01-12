import React from "react";
import {NavLink} from "react-router-dom";
import logo from "./Images/logo-1.png";

const Navbar = () =>{
  return(
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">
    <img src={logo} alt="MyBarber Logo" style={{height: "70px", marginRight: "10px"}} />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink 
        className={({isActive}) => isActive ? "nav-link menu_active" : "nav-link"}
        to="/">Home <span className="sr-only">(current)</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
        className={({isActive}) => isActive ? "nav-link menu_active" : "nav-link"}
        to="/Service">Menú
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
        className={({isActive}) => isActive ? "nav-link menu_active" : "nav-link"}
        to="/About">Nosotros
        </NavLink>
      </li>
    </ul>
  </div>
</nav>
   
   </div>
        </div>
    </div>
    </>
  );
}
export default Navbar;