import { put} from 'redux-saga/effects'
import {SET_DATA_IN_STORE} from '../actionsTypes'
import axios from 'axios'

function* getData() {
    try {
        let response = yield axios.get('http://localhost:8080/api/list-data');
        if(response.data.success){
            yield put({type: SET_DATA_IN_STORE,  payload: {data: response.data.data}});
        }
    } catch (e) {
        console.log(e.toString());
    }
}

export {getData}