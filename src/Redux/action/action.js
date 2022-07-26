export const addCourse = (data) => {
    return (dispatch) => dispatch({
        type: 'ADD',
        payload: data
    })
}

export const removeCourse = (id) => {
    return (dispatch) => dispatch({
        type: 'REMOVE',
        payload: id
    })
}