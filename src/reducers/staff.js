import {FETCH_ALL_STAFF , DELETE_STAFF ,UPDATE_STAFF,GET_PANEL,FETCH_STAFF } from '../constants/actionTypes';

const staffReducer = (state = [] , action)=>{
    switch(action.type){
        case FETCH_ALL_STAFF :
            return {
                        ...state,
                        staffs : action.payload.data,
                        currentPage: action.payload.currentPage,
                        numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_STAFF :
            return {
                ...state,
                staff2: action.payload.staff,
            };

        case GET_PANEL : 
                return {
                    ...state,
                    members : action.payload,
                };

        case DELETE_STAFF :
                return state.filter((staff) => staff._id !== action.payload);
        case UPDATE_STAFF   :
                    return state.map((staff)=>(staff._id === action.payload._id ? action.payload : staff));
        default:
                return state;
    }
};

export default staffReducer;