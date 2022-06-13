import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { counterReducer } from './counter.reducer';
import { todoReducer } from './todo.reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = legacy_createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)));