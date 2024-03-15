import React, { useEffect, useState } from 'react'; // Importing useEffect and useState hooks
import './App.css'; // Importing the CSS file

function App() {
  // Using state to store the fetched data
  const [fact, setFact] = useState('');
  const [pulseInfo, setPulseInfo] = useState('');

  useEffect(() => {
    // Fetching the cat fact
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        // Setting the fetched fact into the state
        setFact(data.fact);
      })
      .catch((error) => {
        console.error('Error fetching cat fact:', error);
      });

    // Setting the pulse information
    setPulseInfo('Normal for cats: 110-170 beats per minute.');
  }, []); // Empty dependency array to ensure useEffect only runs once

  return (
    <div className="App">
      <h1>Cat Fact</h1>
      <p>{fact}</p>
      <h2>Cat Pulse Information</h2>
      <p>{pulseInfo}</p>
    </div>
  );
}

export default App;