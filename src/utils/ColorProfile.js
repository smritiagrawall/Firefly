import React from "react";
import Rowwrapper from "../wrappers/RowWrapper";



const ColorProfile =({color})=>{
    return(
<>
{" "}
<Rowwrapper>

        <button className="subdiv">
         <h3>Yellow</h3>
        </button>
        {/* <button className="subdiv1">
        <h3>Green</h3>
</button>
<button className="subdiv2">
<h3>Pink</h3>
</button> */}
  
    </Rowwrapper>
</>
    )
};

export default ColorProfile;