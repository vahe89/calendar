import {SET_ITEM_IN_STORE} from "../actionsTypes";

const setItemStore = (item)=>{
    return {
        type: SET_ITEM_IN_STORE,
        payload: {data: item}
    }
};

export {setItemStore}