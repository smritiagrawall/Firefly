import React from "react";
import './List.css';
import frame from '../images/Frame1.png';
function List() {
    return(
<div>
<div className="frequent">
    <h2>Frequent</h2>
</div>
<div className="names">
    <div className="subname">
    <img className="image" src={frame} alt="my image"></img>
    <div className="sub">
    <h3>Samwise gamgee</h3>
    <p>Discord| username</p>
    </div>
   
    </div>
<div className="subname"><img className="image" src={frame} alt="my image"></img>
<div className="sub">
    <h3>Samwise gamgee</h3>
    <p>Discord| username</p>
    </div>
</div>
<div className="subname">
<img className="image" src={frame} alt="my image"></img>
<div className="sub">
    <h3>Samwise gamgee</h3>
    <p>Discord| username</p>
    </div>
</div>
</div>

<div className="contact">
    <div className="contactcontent">
        <h2>All Contacts</h2>
        <p>100 contacts</p>
    </div>
    <div className="colors">
        <div className="subdiv">
         <h3>Yellow</h3>
        </div>
        <div className="subdiv1">
        <h3>Green</h3>
</div>
<div className="subdiv2">
<h3>Pink</h3>
</div>
    </div>
</div>
<div className="names">
    <div className="subname">
    <img className="image" src={frame} alt="my image"></img>
    <div className="sub">
    <h3>Samwise gamgee</h3>
    <p>Discord| username</p>
    </div>
   
    </div>
<div className="subname"><img className="image" src={frame} alt="my image"></img>
<div className="sub">
    <h3>Samwise gamgee</h3>
    <p>Discord| username</p>
    </div>
</div>
<div className="subname">
<img className="image" src={frame} alt="my image"></img>
<div className="sub">
    <h3>Samwise gamgee</h3>
    <p>Discord| username</p>
    </div>
</div>
</div>

</div>
)};
    export default List;