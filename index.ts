import { createStore } from 'redux';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

interface counterStateI {
    counter: number
}
interface actionI {
    type: string
    payload?: number
}

const initialState = { counter: 0 };

let counter =  (
    state: counterStateI = initialState,
    action: actionI) => {
        switch (action.type){
            case INCREMENT:
                return state.counter + action.payload;
            case DECREMENT:
                return state.counter - action.payload; 
            default:
                return state;
        }
}


const store = createStore(counter);


export default store;