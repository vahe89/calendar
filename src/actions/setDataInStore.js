import {SET_DATA_IN_STORE} from "../actionsTypes";

const setDataStore = (data)=>{
    return {
        type: SET_DATA_IN_STORE,
        payload: {data: data}
    }
};

export {setDataStore}