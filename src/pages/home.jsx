import React, { useState } from 'react';
import Papa from 'papaparse';
import itemsCSV from '../items.csv?raw';

function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const items = Papa.parse(itemsCSV, {headers: true});
console.log(items);

const App = () => {
  const [currentItem, setCurrentItem] = useState(getRandomItem(items));
  const [isCorrect, setIsCorrect] = useState(null);

  const handleGuess = (guess) => {
    if (guess === currentItem.type) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextItem = () => {
    setCurrentItem(getRandomItem(items));
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