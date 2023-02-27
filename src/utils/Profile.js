import React from "react";
import frame from '../images/Frame1.png';
import Rowwrapper from "../wrappers/RowWrapper";
import styled from "styled-components";


const Profile =({fullname})=>{

    return(
<>
{" "}
<Rowwrapper>
<div className="subname">
    <img className="image" src={frame} alt="my image"></img>
    <div className="sub">
    <h3>Samwise gamgee</h3>
    <p>Discord| username</p>
    </div>
   
    </div>
    </Rowwrapper>
</>
    )
};

export default Profile;