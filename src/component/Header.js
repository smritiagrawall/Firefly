import React from "react";
import "./Header.css";
import fire from '../images/Firefly.png';
import { Link } from 'react-router-dom';
import Addcontact from "../Pages/Addcontact";
function Header() {
return(
    <div>
    <div className="rectangle">
        <div className="butterfly">
        <img className="image1" src={fire} alt="my image"></img>
        </div>
        <div className="addcontacts">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {/* <Link  path="/Addcontact" > */}
        <a href="/Addcontact">
            <button class="btn" ><i class="fa fa-plus"></i></button>
        </a>
            {/* </Link> */}
        </div>
    </div>

    </div>
    );
}

export default Header;