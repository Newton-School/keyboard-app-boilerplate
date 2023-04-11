import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {
  const [input, setInput] = useState("");
  const [quote, setQuote] = useState(null);

  
  if (quote) {
    return <div className="quote">{quote}</div>;
  }

  return (
    <div className="keyboard">
      <div className="preview">{input}</div>
      <div>
        {keys.map((key) => (
          <button key={key} id={key === " " ? `key-space` : `key-${key}`}>
            {key === " " ? "Space" : key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
