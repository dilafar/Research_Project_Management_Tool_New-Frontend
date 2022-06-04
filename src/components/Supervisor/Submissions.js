import React from "react";
import subStyle from "../../css/viewSubmission.module.css";


import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";




function Submission() {
  const [submissions, setsubmissions] = useState([]);

  

  useEffect(() => {
    axios
      .get("http://localhost:5000/adminsubmission/details")
      .then((res) => {
        setsubmissions(res.data);
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
     
    <div className={subStyle.submissionsDetailsDiv}>

<center><h3 className={subStyle.header}>Supervisor Submission Details</h3></center>
       <Container>
      <table width="100%" border="1px" className={subStyle.tbldata}>
        <tr>
          <th className={subStyle.tbldata}>Subject</th>
          <th className={subStyle.tbldata}>URL</th>
         
        </tr>
        {submissions.map((submission) => (
          <tr className={subStyle.tbldata}>
            <td className={subStyle.tbldata}>{submission.subject}</td>
            <td className={subStyle.tbldata}><a href = {submission.submitURL}>
{submission.submitURL}
</a>
</td>
           
            
          </tr>
        ))}
        
      </table>
      </Container>
    </div>
  );
}

export default Submission;