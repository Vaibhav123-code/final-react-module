import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '../actions/wordAction';

const History = () => {
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div>
      <h1>Search History</h1>
      <ul>
        {history.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
      <button onClick={handleClearHistory}>Clear History</button>
    </div>
  );
};

export default History;
