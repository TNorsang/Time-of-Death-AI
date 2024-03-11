import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function DeathPrediction() {
  // State variables to hold age and random years
  const [age, setAge] = useState(0);
  const [randomYears, setRandomYears] = useState(0);

  // Function to generate a random age and random years
  const generatePrediction = () => {
    const randomAge = Math.floor(Math.random() * 100) + 1; // Generate a random age between 1 and 100
    const randomYearsToAdd = Math.floor(Math.random() * 100); // Generate a random number of years to add

    setAge(randomAge);
    setRandomYears(randomYearsToAdd);
  };

  // Use useHistory hook to navigate back to DeathNote page
  const history = useHistory();

  return (
    <div>
      <h1>Death Prediction</h1>
      <p>Your predicted age: {age}</p>
      <p>Additional years added: {randomYears}</p>
      <p>You will die at the age of {age + randomYears}.</p>
      <button onClick={() => history.push("/deathnote")}>
        Back to Death Note
      </button>
    </div>
  );
}

export default DeathPrediction;
