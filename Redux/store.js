// import {createStore} from 'redux'
import {legacy_createStore as configurestore} from 'redux'
import rootReducer from './RootReducer'

const store  = configurestore(rootReducer);

export default store;