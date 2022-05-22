import React from 'react'
import {thead ,Table , th ,td ,tr} from 'reactstrap';
import UpdateModelStaff from '../../../common/model/staffModel/UpdateModel';
import DeleteModelStaff from '../../../common/model/staffModel/DeleteModel';

const Staff = ({staff}) => {
  return (
    <tr>
    <th scope="row">
    
    <img   src={staff.image} alt="icon" height="100" width="100"/>
    </th>
    <td>
     <span>{staff.firstname}</span><span>{staff.lastname}</span>
    </td>
    <td>
      {staff.faculty}
    </td>
    <td>
   {staff.email}
    </td>
    <td>
  {staff.staffID}
    </td>
    <td>
  {staff.type}
    </td>
    <td>
       {staff.contactnumber}
    </td>
    <td>
    <span style={{backgroundColor : staff.status === 'pending' ? "yellow":staff.status === 'Approved' ? "green":staff.status === 'Rejected' ? "red" : " " , padding: "5px", borderRadius: "10px"}}>
      {staff.status}</span>
    </td>
    <td>
    <div style={{display:"flex" }}>
        <UpdateModelStaff staff={staff} /> <DeleteModelStaff staff={staff} />
        </div>
    </td>
  </tr>
  )
}

export default Staff