import React, { useState } from "react";
import Papa from "papaparse";
import itemsCSV from "../items.csv?raw";

const itemsInOriginalOrder = Papa.parse(itemsCSV, {
  comments: "#",
  header: true,
  skipEmptyLines: "greedy",
});
const items = itemsInOriginalOrder.data.sort(() => Math.random() - 0.5);

const Home = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentItem = items[currentItemIndex];

  const handleGuess = (guess) => {
    if (guess === currentItem.type) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextItem = () => {
    setCurrentItemIndex((index) => (index + 1) % items.length);
    setIsCorrect(null);
  };

  return (
    <div>
      <h2>{currentItem.name}</h2>

      {isCorrect === null && (
        <div>
          <h3>Is it a Tomato, a Cannabis Strain, or Both?</h3>
          <div>
            <button onClick={() => handleGuess("tomato")}>Tomato</button>
            <button onClick={() => handleGuess("cannabis")}>Cannabis</button>
            <button onClick={() => handleGuess("both")}>Both</button>
          </div>
        </div>
      )}

      {isCorrect !== null && (
        <div>
          <h3>{isCorrect ? "Correct!" : "Incorrect!"}</h3>
          {currentItem.image1 && (
            <p>
              <a href={currentItem.link1}>
                <img
                  src={`/images/${currentItem.image1}`}
                  alt={`Picture of ${currentItem.name}`}
                  style={{ maxWidth: "300px" }}
                />
              </a>
            </p>
          )}
          {currentItem.image2 && (
            <p>
              <a href={currentItem.link2}>
                <img
                  src={`/images/${currentItem.image2}`}
                  alt={`Second picture of ${currentItem.name}`}
                  style={{ maxWidth: "300px" }}
                />
              </a>
            </p>
          )}
          <button onClick={handleNextItem}>Next Item</button>
        </div>
      )}
    </div>
  );
};

export default Home;
