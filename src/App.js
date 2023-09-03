
import React from 'react';
import Home from './Component/Home';
import History from './Component/History';
import Nav from './Component/Nav';
import {Routes,Route} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='navbar'>
      <Nav />
      </div>

      <div className='section'>
        <Routes>
           <Route exact path="/" element={<Home />} />
           <Route path="/history" element={<History />} />
          
         </Routes>
         </div>
    </div>
  );
};

export default App;
