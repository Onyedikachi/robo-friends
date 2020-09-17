import * as Types from './types';

export const setSearchField =  (text) =>({
    type: Types.setFieldChanged,
    payload: text
});

export const  requestRobots = (dispatch)=>{
    dispatch({ type: Types.requestRobotsPending});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => dispatch({type: Types.requestRobotsSuccess, payload: users}))
    .catch(error => dispatch({type: Types.requestRobotsFailed, payload: error}))
}