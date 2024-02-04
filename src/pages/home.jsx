import React, { useState } from 'react';

const items = [
  { name: 'Cherry Tomato', type: 'tomato', image: 'https://example.com/cherry-tomato.jpg' },
  { name: 'OG Kush', type: 'cannabis', image: 'https://example.com/og-kush.jpg' },
  { name: 'Tomatillo', type: 'both', image: 'https://example.com/tomatillo.jpg' },
  // Add more items as needed
];

const App = () => {
  const [currentItem, setCurrentItem] = useState(items[0]);
  const [userGuess, setUserGuess] = useState(null); // Updated to null
  const [isCorrect, setIsCorrect] = useState(null);

  const handleGuess = (guess) => {
    if (guess === currentItem.type) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setCurrentItem(items[randomIndex]);
    setUserGuess(null); // Reset to null for the next item
    setIsCorrect(null);
  };

  return (
    <div>
      <h1>Guess the Item</h1>
      <p>Is it a Tomato, a Cannabis Strain, or Both?</p>

      {isCorrect === null && (
        <div>
          <p>{currentItem.name}</p>
          <div>
            <button onClick={() => handleGuess('tomato')}>Tomato</button>
            <button onClick={() => handleGuess('cannabis')}>Cannabis</button>
            <button onClick={() => handleGuess('both')}>Both</button>
          </div>
        </div>
      )}

      {isCorrect !== null && (
        <div>
          <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
          <p>{currentItem.name}</p>
          <p><img src={currentItem.image} alt={`Picture of ${currentItem.name}`} style={{ maxWidth: '300px' }} /></p>
          <button onClick={handleNextItem}>Next Item</button>
        </div>
      )}
    </div>
  );
};

export default App;