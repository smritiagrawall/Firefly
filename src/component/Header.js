import React from "react";
import "./Header.css";
import fire from '../images/Firefly.png';
import { FaPlus } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import Addcontact from "../Pages/Addcontact";
import { Route, useNavigate,Switch, Link, Routes } from "react-router-dom";
function Header() {
    // const navigate = useNavigate();
    // const redirectadd = () => {
    //   //Redirect to the python page
    //   navigate("/Addcontact");
    // };
return(
    <div>
    <div className="rectangle">
        <div className="butterfly">
        <img className="image1" src={fire} alt="my image"></img>
        </div>
        <div className="addcontacts">
       
        <Link to="/addcontact" >
      
            <button class="btn"><FaPlus /></button>
      
            </Link>   
        </div>
    </div>
{/* //  onClick={redirectadd}> */}
    </div>
    );
}

export default Header;