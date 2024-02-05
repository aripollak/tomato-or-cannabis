import React, { useState } from "react";
import Papa from "papaparse";
import Title from "../components/title"
import itemsCSV from "../items.csv?raw";

const itemsInOriginalOrder = Papa.parse(itemsCSV, {
  comments: "#",
  header: true,
  skipEmptyLines: "greedy",
});
const items = itemsInOriginalOrder.data.sort(() => Math.random() - 0.5);

export default function Home() {
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
      <Title subtitle={currentItem.name} />

      <div className="interactions">
        <h2>{currentItem.name}</h2>

        {isCorrect === null && (
          <div>
            <h3>Is it a Tomato Variety, a Cannabis Strain, or Both?</h3>
            <div>
              <button onClick={() => handleGuess("tomato")}>Tomato</button>
              <button onClick={() => handleGuess("cannabis")}>Cannabis</button>
              <button onClick={() => handleGuess("both")}>Both</button>
            </div>
          </div>
        )}
        {isCorrect !== null && (
          <div>
            <h3>
              {isCorrect ? "Correct!" : "Incorrect!"} It is {currentItem.type}
            </h3>
            <button onClick={handleNextItem}>Next Item</button>
          </div>
        )}
      </div>

      {isCorrect !== null && (
        <div className="illustrations">
          {currentItem.image1 && (
            <a href={currentItem.link1}>
              <img
                className="illustration"
                src={`/images/${currentItem.image1}`}
                alt={`Picture of ${currentItem.name}`}
              />
            </a>
          )}
          {currentItem.image2 && (
            <a href={currentItem.link2}>
              <img
                className="illustration"
                src={`/images/${currentItem.image2}`}
                alt={`Second picture of ${currentItem.name}`}
              />
            </a>
          )}
        </div>
      )}
    </div>
  );
};
