export const increment = (inp) => {
    return {
        type: 'INCREMENT',
        payload: inp,
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}

export const makeZero = () => {
    return {
        type: 'MAKE_ZERO'
    }
}

export const getUser = () => {
    return {
        type: 'GET_USER_REQUESTED',
    }
}