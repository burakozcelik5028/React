const initialState = {
    users:[],
    loading: false,
    errorMessage: null
}

const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'GET_USER_REQUESTED':
            return {...state, loading: true}
        case 'GET_USER_SUCCESS':
            return {...state, users: action.users, loading: false}
        case 'GET_USERS_ERROR':
            return {...state, errorMessage: action.errorMessage, loading: false}
    
        default:
            return state;
    }
}

export default usersReducer;