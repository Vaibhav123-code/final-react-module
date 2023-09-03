// // src/reducers/wordReducer.js
// import { FETCH_WORD_SUCCESS, FETCH_WORD_FAILURE } from '../actions/wordAction';

// const initialState = {
//   wordData: null,
//   error: null,
// };

// const wordReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_WORD_SUCCESS:
//       return {
//         ...state,
//         wordData: action.payload,
//         error: null,
//       };
//     case FETCH_WORD_FAILURE:
//       return {
//         ...state,
//         wordData: null,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default wordReducer;

// Modify your wordReducer.js file
// import { FETCH_WORD_SUCCESS, FETCH_WORD_FAILURE, ADD_TO_HISTORY, CLEAR_HISTORY } from '../actions/wordAction';

// // Add a new initial state property for history
// const initialState = {
//   wordData: null,
//   error: null,
//   history: [],
// };

// const wordReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_WORD_SUCCESS:
//       return {
//         ...state,
//         wordData: action.payload,
//         error: null,
//       };
//     case FETCH_WORD_FAILURE:
//       return {
//         ...state,
//         wordData: null,
//         error: action.payload,
//       };
//     case ADD_TO_HISTORY:
//       return {
//         ...state,
//         history: [...state.history, action.payload],
//       };
//     case CLEAR_HISTORY:
//       return {
//         ...state,
//         history: [],
//       };
//     default:
//       return state;
//   }
// };

// export default wordReducer;
// src/reducers/wordReducer.js
// Import the CLEAR_WORD_DATA action type
import { FETCH_WORD_SUCCESS, FETCH_WORD_FAILURE, ADD_TO_HISTORY, CLEAR_HISTORY, CLEAR_WORD_DATA } from '../actions/wordAction';

const initialState = {
     wordData: null,
     error: null,
     history: [],
   };

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORD_SUCCESS:
      return {
        ...state,
        wordData: action.payload,
        error: null,
      };
    case FETCH_WORD_FAILURE:
      return {
        ...state,
        wordData: null,
        error: action.payload,
      };
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case CLEAR_HISTORY:
      return {
        ...state,
        history: [],
      };
    case CLEAR_WORD_DATA:
      return {
        ...state,
        wordData: "",
      };
    default:
      return state;
  }
};

export default wordReducer;
