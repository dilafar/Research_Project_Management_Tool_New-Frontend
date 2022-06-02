import React, { useState } from 'react'
import {thead ,Table , th ,td ,tr} from 'reactstrap';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody } from 'reactstrap';
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
        
    <FormGroup>
    <Label for="exampleDatetime">
      Date
    </Label>
    <Input
      id="exampleDatetime"
      name="datetime"
      placeholder="datetime placeholder"
      type="date"
     
    />
  </FormGroup>
  
  <FormGroup>
    <Label for="exampleDatetime">
      Start Time
    </Label>
    <Input
      id="exampleDatetime"
      name="datetime"
      placeholder="datetime placeholder"
      type="time"
     
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleDatetime">
      End Time
    </Label>
    <Input
      id="exampleDatetime"
      name="datetime"
      placeholder="datetime placeholder"
      type="time"
      
    />
  </FormGroup>
  
    </td>
    <td>
    <FormGroup>
    
    <Input
      id="panel"
      name="panel"
      type="select"
      onChange={(e)=> setpanel(e.target.value)}
      
    >
        <option value = "Select panel">
        Select panel
      </option>
      <option value = "panel 1">
      panel 1
      </option>
      <option value = "panel 2">
      panel 2
      </option>
      <option value = "panel 3">
      panel 3
      </option>
      <option value = "panel 4">
      panel 4
      </option>
      <option value = "panel 5">
      panel 5
      </option>

      <option value = "panel 6">
      panel 6
      </option>
      
    </Input>
  </FormGroup>
    </td>
  </tr>
 
  )
}

export default SingleViva