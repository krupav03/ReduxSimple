// Reducers specify how the app's state changes in response to actions. 
import { INCREMENT,DECREMENT } from "./Actions";

const initialState = {
    count : 0 
};

const counterReducer = (state = initialState, action) => {
    console.log('action---1->',action)
    switch (action.type) {
        case INCREMENT : 
            return {
                ...state,
                count : state.count + 1
            };
        
        case DECREMENT :
            return {
                ...state,
                count : state.count - 1
            };
        
        default:
        return state;
    }
};

export default counterReducer;