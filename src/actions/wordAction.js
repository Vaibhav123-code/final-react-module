
import axios from 'axios';

// Define action types
export const FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS';
export const FETCH_WORD_FAILURE = 'FETCH_WORD_FAILURE';

// Add these action types to your wordAction.js file
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export const CLEAR_WORD_DATA = 'CLEAR_WORD_DATA';


// Action creators

export const clearWordData = () => ({
  type: CLEAR_WORD_DATA,
});

export const fetchWordSuccess = (wordData) => ({
  type: FETCH_WORD_SUCCESS,
  payload: wordData,
});

export const fetchWordFailure = (error) => ({
  type: FETCH_WORD_FAILURE,
  payload: error,
});

// Add these action creators to your wordAction.js file
export const addToHistory = (search) => ({
  type: ADD_TO_HISTORY,
  payload: search,
});

export const clearHistory = () => ({
  type: CLEAR_HISTORY,
});


// Async action to fetch word details
export const fetchWordDetails = (search) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
      );
      const wordData = response.data[0];
      dispatch(fetchWordSuccess(wordData));
    } catch (error) {
      dispatch(fetchWordFailure(error.message));
    }
  };
};


