import React, { useState } from 'react';
import Papa from 'papaparse';
import itemsCSV from '../items.csv?raw';

const items = Papa.parse(itemsCSV, {header: true});

function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * items.data.length);
  return items.data[randomIndex];
}

const App = () => {
  const [currentItem, setCurrentItem] = useState(getRandomItem());
  const [isCorrect, setIsCorrect] = useState(null);

  const handleGuess = (guess) => {
    if (guess === currentItem.type) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextItem = () => {
    setCurrentItem(getRandomItem());
    setIsCorrect(null);
  };
  
  return (
    <div>
      <h1>{currentItem.name}</h1>

      {isCorrect === null && (
        <div>
         <h2>Is it a Tomato, a Cannabis Strain, or Both?</h2>
          <div>
            <button onClick={() => handleGuess('tomato')}>Tomato</button>
            <button onClick={() => handleGuess('cannabis')}>Cannabis</button>
            <button onClick={() => handleGuess('both')}>Both</button>
          </div>
        </div>
      )}

      {isCorrect !== null && (
        <div>
          <h2>{isCorrect ? 'Correct!' : 'Incorrect!'}</h2>
          <p><img src={currentItem.image} alt={`Picture of ${currentItem.name}`} /></p>
          <button onClick={handleNextItem}>Next Item</button>
        </div>
      )}
    </div>
  );
};

export default App;