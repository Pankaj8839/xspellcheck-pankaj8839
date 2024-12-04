import './App.css';
import React, { useEffect, useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

function App() {
  const [text, setText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleChange = (e) => {
    let value=e.target.value;
    setText(value);
    let words = value.toLowerCase().split(" ");
    let corrections=words.find((word) => customDictionary[word]!==undefined);
    let suggusedWord = corrections ? customDictionary[corrections] : "";
    setSuggestedText(suggusedWord); 
  };


  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea placeholder="Enter text..." style={{ width: "45vw", height: "200px" }} value={text} onChange={(e) => handleChange(e)}></textarea>
     {suggestedText!=="" && <p>Did you mean: {suggestedText}?</p>}
    </div>
  );
}

export default App;
