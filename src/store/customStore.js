
import reducer from './store/reducer';

function createStore(reducer) {
    let state; 
    let listeners = [];

    function subscribe(listner){
        listeners.push(listner);

    }
    function dispatch(action){
        state =  reducer(state, action);
        for( let i = 0; i < listeners.length; i++){
            listeners[i];
        }
    }
    function getState() {
        return state;
    }

    return {
        getState,
        dispatch,
        subscribe
    };
}

export default createStore(reducer);