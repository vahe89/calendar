import {SET_DATA_IN_STORE, SET_ITEM_IN_STORE} from '../actionsTypes'

const INITIAL_STATE = {
    data: []
};

export default (state = INITIAL_STATE,action)=>{
    switch (action.type) {
        case SET_DATA_IN_STORE:
            return {
                ...state,
                data: action.payload.data
            };
        case SET_ITEM_IN_STORE:
            let newData = [...state.data];
            newData.unshift(action.payload.item);
            return {
                ...state,
                data: newData
            };
        default: return state
    }
}