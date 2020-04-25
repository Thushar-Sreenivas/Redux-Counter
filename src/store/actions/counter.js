import * as actionTypes from './actionTypes'

export const increment = () => {
    return {
        type: actionTypes.INCREMENT 
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addition = (value) => {
    return {
        type: actionTypes.ADDITION,
        val: value
    }
}

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    }
}