import React, { useState, useEffect } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { useDispatch ,useSelector } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import {getStaff} from '../../actions/user';
import {Link , useNavigate} from 'react-router-dom';
//import UpdateModelStudentProfile from "../../common/model/studentModel/UpdateProfile";

const Profile2 = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const {staff2} = useSelector((state) => state.staff);
  const navigate = useNavigate();

  useEffect(() => {
    const token = user?.token;
    
    if (token) {
      const decodedToken = decode(token);
      console.log(decodedToken.id);
      dispatch(getStaff(decodedToken.id));
      console.log(staff2);
     
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  return (
    <div>
      <div className="container">
<div className="row flex-lg-nowrap">


  <div className="col">
    <div className="row">
      <div className="col mb-3">
        <div className="card">
          <div className="card-body">
            <div classNames="e-profile">
              <div className="row">
                <div className="col-12 col-sm-auto mb-3">
                  <div className="mx-auto" style={{width: '140px'}}>
                    <div className="d-flex justify-content-center align-items-center rounded" style={{height: '140px' , backgroundColor: 'rgb(233, 236, 239)'}}>
                     
                      <img   src={staff2?.image} alt="icon" height="140" width="140"/>
                    </div>
                  </div>
                </div>
                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                  <div className="text-center text-sm-left mb-2 mb-sm-0">
                    <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{staff2?.firstname} {staff2?.lastname}</h4>
                    <p className="mb-0">@{staff2?.firstname} {staff2?.lastname}.edu</p>
                    <div className="text-muted"><small>Last seen 2 hours ago</small></div>
                    <div className="mt-2">
                     
                    </div>
                  </div>
                  <div className="text-center text-sm-right">
                    <span className="badge badge-secondary">Staff</span>
                    <div className="text-muted"><small>{staff2?.createdAt}</small></div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item"><a href="" className="active nav-link">Details</a></li>
                
              </ul>
              <div  className="tab-content pt-3">
                <div  className="tab-pane active">
                 
                    <div  className="row">
                      <div  className="col">
                        <div  className="row">
                          <div  className="col">
                            <div  className="form-group">
                              <label>First Name</label>
                              <p>{staff2?.firstname}</p>
                            </div>
                          </div>
                          <div  className="col">
                            <div  className="form-group">
                              <label>Last Name</label>
                              <p>{staff2?.lastname}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col">
                            <div  className="form-group">
                              <label>Faculty</label>
                              <p>{staff2?.faculty}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col">
                            <div  className="form-group">
                              <label>Student ID</label>
                              <p>{staff2?.staffID}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col">
                            <div  className="form-group">
                              <label>Email</label>
                              <p>{staff2?.email}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col mb-3">
                            <div className="form-group">
                              <label>Contact Number</label>
                              <p>{staff2?.contactnumber}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col mb-3">
                            <div className="form-group">
                              <label>Date Of Birth</label>
                              <p>{staff2?.dob}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col mb-3">
                            <div className="form-group">
                              <label>Education Qualification</label>
                              <p>{staff2?.educationQualification}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col mb-3">
                            <div className="form-group">
                              <label>Research Specialized Area</label>
                              <p>{staff2?.researchSpeacializedArea}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col mb-3">
                            <div className="form-group">
                              <label>Past Research Experiance</label>
                              <p>{staff2?.pastresearchexperiance}</p>
                            </div>
                          </div>
                        </div>
                        <div  className="row">
                          <div  className="col mb-3">
                            <div className="form-group">
                              <label>Address</label>
                              <p>{staff2?.address}</p>
                            </div>
                          </div>
                        </div>
                     
                      </div>
                    </div>
                   



            </div>
          </div>
        </div>
      </div>

      
    </div>

  </div>
  
</div>
</div>
    </div>

    

    </div>
    
    </div>

  )
}

export default Profile2;