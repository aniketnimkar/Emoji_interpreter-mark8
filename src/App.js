import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "smiling",
  "😁": "beaming face",
  "🙃": "upside-down face",
  "😗": "kissing face",
  "🤑": "money mouth face"
};

var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have is in our DataBase";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Finder!!</h1>

      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>

      <h3> Emojis we know</h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
