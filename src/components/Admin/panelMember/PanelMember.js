import React from 'react'
import {thead ,Table , th ,td ,tr} from 'reactstrap';
import PanelMemberUpdateModel from './PanelMemberUpdateModel';

const PanelMember = ({panelmember}) => {
  return (
    <tr>
    <th scope="row">
    
    {panelmember.staffID}
    </th>
    <td>
     <span>{panelmember.firstname}</span><span>{panelmember.lastname}</span>
    </td>
    <td>
      {panelmember.faculty}
    </td>
    <td>
   {panelmember.educationQualification}
    </td>
    <td>
  {panelmember.pastresearchexperiance}
    </td>
    <td>
  {panelmember.researchSpeacializedArea}
    </td>
    
    <td>
    <span style={{backgroundColor :  "yellow" , padding: "5px", borderRadius: "10px"}}>
    {panelmember.panel}</span>
    </td>
    <td>
    <div style={{display:"flex" }}>
      <PanelMemberUpdateModel panelmember={panelmember} />
        </div>
    </td>
  </tr>
  )
}

export default PanelMember