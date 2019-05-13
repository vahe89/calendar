import {takeLatest, all } from 'redux-saga/effects'
import {saveForm} from './saveForm'
import {getData} from './getData'
import {SAVE_FORM,GET_DATA} from '../actionsTypes'

function* actionWatcher() {
    yield takeLatest(SAVE_FORM, saveForm);
    yield takeLatest(GET_DATA, getData);
}
export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}
