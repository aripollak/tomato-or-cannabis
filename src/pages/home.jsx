import React, { useState } from 'react';
import Papa from 'papaparse';
import itemsCSV from '../items.csv?raw';

const items = Papa.parse(itemsCSV, {header: true, skipEmptyLines: 'greedy'});

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
      <h2>{currentItem.name}</h2>

      {isCorrect === null && (
        <div>
         <h3>Is it a Tomato, a Cannabis Strain, or Both?</h3>
          <div>
            <button onClick={() => handleGuess('tomato')}>Tomato</button>
            <button onClick={() => handleGuess('cannabis')}>Cannabis</button>
            <button onClick={() => handleGuess('both')}>Both</button>
          </div>
        </div>
      )}

      {isCorrect !== null && (
        <div>
          <h3>{isCorrect ? 'Correct!' : 'Incorrect!'}</h3>
          {currentItem.image1 && (
            <p>
              <a href={currentItem.link1}><img
                src={`/images/${currentItem.image1}`} alt={`Picture of ${currentItem.name}`} style={{maxWidth: '300px'}} /></a>
            </p>
          )}
          {currentItem.image2 && (
            <p>
              <a href={currentItem.link2}><img
                src={`/images/${currentItem.image2}`} alt={`Second picture of ${currentItem.name}`} style={{maxWidth: '300px'}} /></a>
            </p>
          )}
          <button onClick={handleNextItem}>Next Item</button>
        </div>
      )}
    </div>
  );
};

export default App;
