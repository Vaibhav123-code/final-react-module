// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';
// import thunk from 'redux-thunk';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
// src/store.js

// src/services/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import wordReducer from './reducers/wordReducer';

const store = createStore(wordReducer, applyMiddleware(thunk));

export default store;

