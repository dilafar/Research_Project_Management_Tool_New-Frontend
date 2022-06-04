import React from 'react'
import {thead ,Table , th ,td ,tr} from 'reactstrap';

const Single = ({group }) => {
  return (
   
        <tr>
    <th scope="row">
    
    <p>{group._id}</p>
    </th>
    <td>
    <div><p>{group.leader}</p>
    <p>{group.student1}</p>
    <p>{group.student2}</p>
    <p>{group.student3}</p>
   
    </div>
    </td>
    <td>
    <div>
    <p>{group.updatedAt}</p>
    </div>
    </td>
    
   
   
   
  </tr>
 
  )
}

export default Single