import React, { useState } from 'react'
import {thead ,Table , th ,td ,tr} from 'reactstrap';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody } from 'reactstrap';
import UpdateStudentGroupModel from '../../common/model/panelModel/UpdateStudentGroup';
//var DatePicker = require("reactstrap-date-picker");

const SingleViva = ({group ,count}) => {
    const [time, settime] = useState('');
   
  return (
   
        <tr>
    <th scope="row">
    
    <p>2022_RESEARCH_{count}</p>
    </th>
    <td>
    <div><p>{group.leader}</p>
    <p>{group.student1}</p>
    <p>{group.student2}</p>
    <p>{group.student3}</p>
    </div>
    </td>
    <td>
    <div><p>{group.leaderid}</p>
    <p>{group.student1id}</p>
    <p>{group.student2id}</p>
    <p>{group.student3id}</p>
    </div>
    </td>
    
   
   
    
    <td>
      <UpdateStudentGroupModel group={group}/>
    </td>
  </tr>
 
  )
}

export default SingleViva