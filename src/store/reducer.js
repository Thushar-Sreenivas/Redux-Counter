const intialState = {
    counter: 0,
    results: []
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1            
            }
        case 'DECREMENT':
                return {
                    ...state,
                    counter: state.counter - 1            
                }
        case 'ADDITION':
            return {
                ...state,
                counter: state.counter + action.val            
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val              
            }
        case 'RESULTS': 
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE':
            return {
                ...state,
                results: 0
            }
    }
    
    return state
}
export default reducer