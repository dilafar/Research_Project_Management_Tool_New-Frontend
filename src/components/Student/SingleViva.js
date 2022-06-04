import React from 'react'
import {thead ,Table , th ,td ,tr} from 'reactstrap';

const Singlegroup4 = ({group ,count}) => {
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
    <div>
    <p>{group.Date} at {group.startTime}-{group.endTime}</p>
    
    </div>
    </td>
    <td>
    <div><p>{group.panel}</p>
   
    </div>
    </td>
   
   
   
  </tr>
 
  )
}

export default Singlegroup4;