import React ,{useEffect, useState} from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate , useParams } from 'react-router-dom';
import {getStaff} from '../../actions/user';
import { Card ,Button ,Form,FormGroup , Label ,Input } from 'reactstrap';
import RequestModel from '../../common/model/supervisorModel/RequestModel';



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px 100px 100px 200px;
  display: flex;
  
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 90%;
  height: 70vh;
  object-fit: cover;
 
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

`;

const Title = styled.h1`
  font-weight: 100;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 70;
  
  font-size: 30px;
`;






/*const Button = styled.button`
  padding: 15px;
  margin-top: 100px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  width: 250px;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;*/


const SupervisorDetails = () => {
  
  const dispatch = useDispatch();
  
  const {id} = useParams();
  const { staff} = useSelector((state) => state.staff);

  useEffect(()=>{
            dispatch(getStaff(id));
  },[id]);

 

  return (
    <div>
      
        <Card style={{ margin: "40px"}}>
        
        <Container>
        <div className="modal-header bg-info text-white" >
                    <h5 className="modal-title text-white">Supervisor Details</h5>
                    
                        
                </div>
     
      <Wrapper>
        <ImgContainer>
        {staff  && (
          <Image src={staff.image} />
        )}
          
        </ImgContainer>
        <InfoContainer>
        {staff  && (
         
          <>
          <Price className=" badge badge-secondary">EducationQualification : </Price><br/>
          <Price>{staff.educationQualification}</Price><br/><br/>
          </>
          )}
           {staff  && (
             <>
              <Price className=" badge badge-secondary">
            ResearchSpeacializedArea : 
          </Price><br/>
          <Price>
            {staff.researchSpeacializedArea}
          </Price>
          </>
           )}
          <br/><br/>
          {staff  && (
            <>
             <Price className=" badge badge-secondary">Pastresearchexperiance : </Price><br/>
          <Price> {staff.pastresearchexperiance}</Price>
          </>
          )}
         
         {staff  && (
          <RequestModel StaffId = {id}  Type = {staff.type}/>
          )}
        </InfoContainer>
      </Wrapper>
     
    </Container>
    </Card>
    </div>
  )
}

export default SupervisorDetails;