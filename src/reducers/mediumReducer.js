import {configureStore} from "@reduxjs/toolkit";
import axios from 'axios'


// Initial State //
// There are 2 properties: loading and article. 
const initialState = {
    loading: false,         // Default set to false.
    article: []             // Set to an empty array
}


// Create action types //
// 2 action types: REQUEST_ARTICLE & PENDING
const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const PENDING = 'PENDING';


// Request Articles function //
// Create an async function called 'requestArticles'. Takes in dispatch function as a parameter.
// This function will be exported
export const requestArticles = async (dispatch) => {
    dispatch({type: PENDING})
    let articles = await axios.get('/api/medium').then(res => res.data);
    dispatch({ type: REQUEST_ARTICLES, payload: articles })
  }


// Reducer function // 
// Reducer function compiles (Reduce) the state changes that have been sent by a component's Dispatches. It takes in the current state obejct, 
// along with an action object. Then reduces the information down to the new state variables, and replaces the global state with the new object.
function mediumReducer(state = initialState, action) {
switch (action.type) {
    case PENDING:
    return { ...state, loading: true };
    case REQUEST_ARTICLES:
    return { loading: false, articles: action.payload }
    default:
    return state;
  }
}


export default mediumReducer