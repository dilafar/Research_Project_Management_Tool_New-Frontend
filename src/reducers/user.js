import {FETCH_ALL_USER , DELETE_USER } from '../constants/actionTypes';

const userReducer = (state = [] , action)=>{
    switch(action.type){
        case FETCH_ALL_USER :
            return {
                        ...state,
                        users : action.payload.data,
                        currentPage: action.payload.currentPage,
                        numberOfPages: action.payload.numberOfPages,
            };

        case DELETE_USER:
                return state.filter((user) => user._id !== action.payload);
        default:
                return state;
    }
};

export default userReducer;