import {configureStore} from "@reduxjs/toolkit";
import axios from 'axios'



// Initial State //
// There are 2 properties: loading & article. 
const initialState = {
    loading: false,         // Default set to false.
    articles: []             // Set to an empty array
}


// Create action types //
// 2 action types: REQUEST_ARTICLE & PENDING
const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const PENDING = 'PENDING'


// Request Articles function //
// Create an async function called 'requestArticles'. Takes in dispatch function as a parameter.
export const requestArticles = async (dispatch) => {
    dispatch({type: PENDING})                                                           // Passing in the 'PENDING' object type to Dispatch. This in effect dispatches an action where the type is PENDING. Displays the loading animation. 
    let articles = await axios.get('/api/hacker-news').then(res => res.data);           // Creating 'articles' variable which stores the info from from the hacker-news website via api.
    dispatch({ type: REQUEST_ARTICLES, payload: articles })                             // Passing in the 'REQUEST_ARTICLES' object type to Dispatch. This dispatches an action where the type is action type. Payload property is the result of the axios requeset, or the articles. 
  }




// Reducer function // 
// Reducer function compiles (Reduce) the state changes that have been sent by a component's Dispatches. It takes in the current state obejct, 
// along with an action object. Then reduces the information down to the new state variables, and replaces the global state with the new object.
function hackerNewsReducer(state = initialState, action) {
    switch (action.type) {                                                              // Switch statement with 2 cases:
      case PENDING:                                                                     // 1st case: 'PENDING'. Basically, when loading....
        return { ...state, loading: true };
      case REQUEST_ARTICLES:                                                            // 2nd case: 'REQUEST_ARTICLES'
        return { loading: false, articles: action.payload }
      default:
        return state;
    }
  }




  export default hackerNewsReducer