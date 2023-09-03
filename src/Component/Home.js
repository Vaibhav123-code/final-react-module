
import React, { useState ,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWordDetails, addToHistory, clearWordData } from '../actions/wordAction';

const Home = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const wordData = useSelector((state) => state.wordData);
  const error = useSelector((state) => state.error);
console.log(wordData)


useEffect(() => {
    // Dispatch action to clear word data when Home component is mounted
    dispatch(clearWordData());
  }, [dispatch]);

const handleSearch = () => {
    dispatch(fetchWordDetails(search)).then(() => {
      dispatch(addToHistory(search)); // Add the search to the history
    });
  };

  return (
    <div>
      <div className='input-container'>
      <input
        type="text"
        placeholder="Search for a word"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      {wordData && (
  <div className='word-details'>
    <h2>Word: {wordData.word}</h2>
    <h2>{wordData.phonetics[0].text}</h2>
    <audio controls>
      <source src={wordData.phonetics[0].audio} type="audio/mpeg"></source>
    </audio>

    {/* Check if additional phonetics exist */}
    {wordData.phonetics.length > 1 && (
      <>
        <h2>Additional Phonetics:</h2>
        {wordData.phonetics.slice(1).map((phonetic, index) => (
          <div key={index}>
            <audio controls>
              <source src={phonetic.audio} type="audio/mpeg"></source>
            </audio>
            <p>{phonetic.text}</p>
          </div>
        ))}
      </>
    )}

    <h2>Part of Speech: {wordData.meanings[0].partOfSpeech}</h2>
    <p>
      <b>Definition: </b>
      {wordData.meanings[0].definitions[0].definition}
    </p>

    {/* Check if additional definitions exist */}
    {wordData.meanings[0].definitions.length > 2 && (
      <>
        <p>
          <b>Definition 2: </b>
          {wordData.meanings[0].definitions[2].definition}
        </p>
      </>
    )}

    {/* Check if additional definitions exist */}
    {wordData.meanings[0].definitions.length > 3 && (
      <>
        <p>
          <b>Definition 3: </b>
          {wordData.meanings[0].definitions[3].definition}
        </p>
      </>
    )}

    <hr />

    <h2>Example: {wordData.meanings[0].definitions[0].example}</h2>
  </div>
)}
</div>
  );
};

export default Home;
