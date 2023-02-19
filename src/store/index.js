import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import transaction from './reducers/transaction';
import wallet from './reducers/wallet';


const Reducers = {transaction,wallet};

const Store = createStore(combineReducers(Reducers), applyMiddleware(thunk));

export default Store;
