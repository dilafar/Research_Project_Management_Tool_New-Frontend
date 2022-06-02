import { FETCH_ALL_GROUP , FETCH_GROUP_STUDENT , FETCH_GROUP_SUPERVISOR ,FETCH_GROUP_COSUPERVISOR , CREATE_GROUP , UPDATE_GROUP ,DELETE_GROUP} from '../constants/actionTypes';

const studentGroupReducer = (state = {groups:[]} , action) => {
  switch (action.type) {
    case FETCH_ALL_GROUP:
      return{
              ...state,
              groups: action.payload,
              
      }; 

    case FETCH_GROUP_STUDENT:
        return{
                ...state,
                studentGroup: action.payload,
               
        }; 
    case FETCH_GROUP_SUPERVISOR:
        return{
                    ...state,
                supervisorGroup: action.payload,
                   
        }; 
    case FETCH_GROUP_COSUPERVISOR:
        return{
                        ...state,
                cosupervisorGroup: action.payload,
                       
        }; 

    case CREATE_GROUP:
      return { ...state , groups: [...state.groups , action.payload]};
    case UPDATE_GROUP:
      return { ...state , groups: state.groups.map((groupx)=> (groupx._id === action.payload._id ? action.payload : groupx))};
    case DELETE_GROUP:
      return { ...state , groups: state.groups.filter((groupx)=> groupx._id !== action.payload)};
    default:
      return state;
  }
};
export default studentGroupReducer;