// WordDetails.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWord } from '../actions/wordAction';

const WordDetails = () => {
  const { word } = useParams();
  const dispatch = useDispatch();
  const wordDetails = useSelector((state) => state.wordDetails);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchWord(word));
  }, [word, dispatch]);

  return (
    <div>
      {/* Display detailed word information */}
    </div>
  );
};

export default WordDetails;
