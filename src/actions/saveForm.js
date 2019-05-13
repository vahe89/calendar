import {SAVE_FORM} from "../actionsTypes";

const saveForm = (item)=>{
    return {
        type: SAVE_FORM,
        item: item
    }
};

export {saveForm}