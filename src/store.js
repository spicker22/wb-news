import {configureStore} from "@reduxjs/toolkit";
import hackerNewsReducer from './reducers/hackerNewsReducer.js'
import mediumReducer from './reducers/mediumReducer.js'


// Create an object inside 'configureStore'
export default configureStore({
    reducer: {                                              // 2 new properties have been added to the redux store object
        hackerNews: hackerNewsReducer,                      // hackerNews property
        medium: mediumReducer                               // medium property
      }
  })



