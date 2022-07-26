const courseReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'REMOVE':
            const removeArr = state.filter(i => i.id !== action.payload)
            return removeArr
        default:
            return state
    }
}

export default courseReducer;