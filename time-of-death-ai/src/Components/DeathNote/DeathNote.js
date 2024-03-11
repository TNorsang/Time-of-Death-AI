import React, { useState } from "react";
import "./DeathNote.css";

function DeathNote() {
  // State variables to hold input values
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [birthYear, setBirthYear] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission here, such as sending data to an API
    // You can access input values via state variables (gender, country, occupation, birthYear)
    console.log(
      "Form submitted with values:",
      gender,
      country,
      occupation,
      birthYear
    );
  };

  // Generate an array of years from 1900 to the current year
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = 1900; i <= currentYear; i++) {
    years.push(i);
  }

  return (
    <>
      <div>
        <h1>Know when are you going to DIE :D</h1>
        <form onSubmit={handleSubmit} className="input-list">
          <ul>
            <li>
              <p>Gender</p>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </li>
            <li>
              <p>Country</p>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select Country</option>
                {/* Add options for countries */}
              </select>
            </li>
            <li>
              <p>Occupation</p>
              <select
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              >
                <option value="">Select Occupation</option>
                <option value="doctor">Doctor</option>
                <option value="engineer">Engineer</option>
                {/* Add more options for occupations */}
              </select>
            </li>
            <li>
              <p>Birth Year</p>
              <select
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
}

export default DeathNote;
