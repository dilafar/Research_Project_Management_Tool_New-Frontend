import {FETCH_ALL_USER , DELETE_USER ,UPDATE_USER , FETCH_STUDENT } from '../constants/actionTypes';

const userReducer = (state ={users:[]} , action)=>{
    switch(action.type){
        case FETCH_ALL_USER :
            return {
                        ...state,
                        users : action.payload.data,
                        currentPage: action.payload.currentPage,
                        numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_STUDENT :
                return {
                    ...state,
                    student : action.payload.student,
            };
        
        case DELETE_USER:
                return {...state , users: state.users.filter((user) => user._id !== action.payload)};
               
        case UPDATE_USER   :
                return {...state ,users: state.users.map((user)=>(user._id === action.payload._id ? action.payload : user))};    
                         
        default:
                return state;
    }
};

export default userReducer;