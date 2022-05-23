import {FETCH_ALL_PANEL , UPDATE_PANEL , DELETE_PANEL ,CREATE_PANEL} from '../constants/actionTypes';

const panelreducer = (panels=[] , action)=>{

    switch(action.type){
        case CREATE_PANEL :
            return [...panels , action.payload];
        case FETCH_ALL_PANEL :
            return action.payload;
        case UPDATE_PANEL  :
            return panels.map((panel)=>(panel._id === action.payload._id ? action.payload : panel));
        case DELETE_PANEL   :
            return panels.filter((panel)=> panel._id !== action.payload);
        default:
            return panels;
    }

};
export default panelreducer;