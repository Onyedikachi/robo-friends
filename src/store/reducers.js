import * as Types from './types';

const initialStateSearch = {
    searchField: '',
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const searchRobots = (state = initialStateSearch,action={}) => {
    switch (action.type) {
        case Types.setFieldChanged:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch(action.type){
        case Types.requestRobotsPending:
            return Object.assign({}, state, {isPending: true});
        case Types.requestRobotsSuccess:
            return Object.assign({}, state, {robots: action.payload, isPending: false});
        case Types.requestRobotsFailed:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}