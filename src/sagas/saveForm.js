import { put} from 'redux-saga/effects'
import {SET_ITEM_IN_STORE} from '../actionsTypes'
import axios from 'axios'

function* saveForm(data) {
    try {
        let response = yield axios.post('http://localhost:8080/api/save-item', {data: data.item});
        if(response.data.success){
            yield put({type: SET_ITEM_IN_STORE,  payload: {item: data.item}});
        }
    } catch (e) {
        console.log(e.toString());
    }
}

export {saveForm}