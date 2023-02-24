
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import "./Home.css"

const SearchBar =()=>{
    const [myOptions, setMyOptions] = useState([])
 
    const getDataFromAPI = () => {
      console.log("Options Fetched from API")
   
      fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
        return response.json()
      }).then((res) => {
        console.log(res.data)
        for (var i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].employee_name)
        }
        setMyOptions(myOptions)
      })
}
     return(
      //   <div  style={{ marginLeft: '25%', marginTop: '60px',width:"43.5rem",borderRadius:'1.5rem' ,borderWidth:"0px"}} >
      
      //   <Autocomplete
      //     style={{ width: 700,background:"#222325",border:"none",borderRadius:'1.5rem',color:"#222325" }}
      //     freeSolo
      //     autoComplete
      //     autoHighlight
      //     options={myOptions}
      //     renderInput={(params) => (
      //       <TextField {...params}
      //         onChange={getDataFromAPI}
      //         variant="outlined"
      //         label="Search name,wallet address"
      //         color='#222325'
      //       />
      //     )}
      //   />
      // </div>
     
      <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      
     
      <form class="example" action="action_page.php">
        <input type="text" placeholder="Search name,wallet address.." name="search"/>
        <button type="submit"><i class="fa fa-search"></i></button>
      </form></div>
     );
 


};

export default SearchBar;