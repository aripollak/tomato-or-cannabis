import React, { useState } from "react";
import Papa from "papaparse";
import Button from "../components/button";
import Title from "../components/title";
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

      <div>
        <h2 className="text-2xl font-bold">{currentItem.name}</h2>

        {isCorrect === null && (
          <div>
            <h3 className="text-lg font-semibold">
              <i>Is it a Tomato Variety, a Cannabis Strain, or Both?</i>
            </h3>
            <div className="space-x-4">
              <Button onClick={() => handleGuess("tomato")}>Tomato</Button>
              <Button onClick={() => handleGuess("cannabis")}>Cannabis</Button>
              <Button onClick={() => handleGuess("both")}>Both</Button>
            </div>
          </div>
        )}
        {isCorrect !== null && (
          <div>
            <h3 className="text-lg font-semibold">
              {isCorrect ? "Correct!" : "Incorrect!"} It is {currentItem.type}
            </h3>
            <Button onClick={handleNextItem}>Next Item</Button>
          </div>
        )}
      </div>

      {isCorrect !== null && (
        // add even gap with a visible divider
        <div className="flex justify-center gap-4 py-4">
          {currentItem.image1 && (
            <a href={currentItem.link1}>
              <img
                className="w-96 rounded"
                src={`/images/${currentItem.image1}`}
                alt={`Picture of ${currentItem.name}`}
              />
            </a>
          )}
          {currentItem.image2 && (
            <a href={currentItem.link2}>
              <img
                className="w-96 rounded"
                src={`/images/${currentItem.image2}`}
                alt={`Second picture of ${currentItem.name}`}
              />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
