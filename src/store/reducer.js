
// create the global state
const initialState = {
    counter: 456,
    books: []
}

// create the reducer
// reducer is a function that takes in state and action
// and returns you the updated state
const reducer = (state = initialState, action) => {

    if(action.type == 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if(action.type == 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type == 'ADD') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    } else if (action.type == 'SUBTRACT') {
        return {
            ...state,
            counter: state.counter - action.payload
        }
    }

    return state
}

export default reducer