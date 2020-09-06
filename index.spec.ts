import store from "./index";

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

describe('Testing store reducers with actions', () => {
    it('Should increment using reducers functions', () =>{
        store.dispatch({type: INCREMENT, payload: 1})
        expect(store.getState()).toBe(1);
    })
})
