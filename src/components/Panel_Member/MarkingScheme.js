import React from "react";
import subStyle from "../../css/viewMsSubmission.module.css"


import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";




function MarkingScheme() {
  const [mssubmission, setmssubmission] = useState([]);

  

  useEffect(() => {
    axios
      .get("http://localhost:5000/msSubmission/details")
      .then((res) => {
        setmssubmission(res.data);
      })
      .catch((err) => {
        alert("Something went wrong :(");
        console.log(err);
      });

    return () => {
      // cleanup
    };
  }, []);




  return (
     
    <div className={subStyle.mssubmissionDetailsDiv}>

<center><h3 className={subStyle.header}>Marking Schemes</h3></center>
       <Container>
      <table width="100%" border="1px" className={subStyle.tbldata}>
        <tr>
          <th className={subStyle.tbldata}>Subject</th>
          <th className={subStyle.tbldata}>URL</th>
         
        </tr>
        {mssubmission.map((mssubmission) => (
          <tr className={subStyle.tbldata}>
            <td className={subStyle.tbldata}>{mssubmission.subject}</td>
            <td className={subStyle.tbldata}><a href={mssubmission.submitURL}>
              {mssubmission.submitURL}
              </a></td>
           
            
          </tr>
        ))}
        
      </table>
      </Container>
    </div>
  );
}

export default MarkingScheme;
