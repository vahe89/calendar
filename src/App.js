import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import Home from './components/screens/Home';
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.css';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}