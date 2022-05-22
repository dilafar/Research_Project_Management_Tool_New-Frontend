import React from 'react'
import {thead ,Table , th ,td ,tr} from 'reactstrap';
import UpdateModelStudent from '../../../common/model/studentModel/UpdateModel';
import DeleteModelStudent from '../../../common/model/studentModel/DeleteModel';

const Student = ({user}) => {
  return (
    <tr>
    <th scope="row">
    
    <img   src={user.image} alt="icon" height="100" width="100"/>
    </th>
    <td>
     <span>{user.firstname}</span><span>{user.lastname}</span>
    </td>
    <td>
      {user.faculty}
    </td>
    <td>
   {user.email}
    </td>
    <td>
  {user.studentID}
    </td>
    <td>
       {user.contactnumber}
    </td>
    <td>
    <span style={{backgroundColor : user.status === 'pending' ? "yellow":user.status === 'Approved' ? "green":user.status === 'Rejected' ? "red" : " " , padding: "5px", borderRadius: "10px"}}>
      {user.status}</span>
    </td>
    <td>
    <div style={{display:"flex" }}>
        <UpdateModelStudent user={user} /> <DeleteModelStudent user={user} />
        </div>
    </td>
  </tr>
  )
}

export default Student