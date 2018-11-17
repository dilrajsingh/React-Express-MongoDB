import axios from 'axios'; // to make ajax requests
import { FETCH_USER } from './types';

// action creators:
export const fetchUserOLD = () => {
    // whenever an action is called a function is immediately returned
    // whenever a function is passed it, rather a normal function, redux thunk will call this function
    // and pass in the dispatch function in to it e.g. function(dispatch)
    // why do this? Because we do not want to dispatch an action until this little snippet of code has been passed on
    // this is async
    return function(dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res}));
    }
};

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
  
    dispatch({ type: FETCH_USER, payload: res.data });
  };
 