import React, { useState } from "react";
import "./styles.css";

const emojiData = {
  "🐼": "Panda",
  "🐓": "Rooster",
  "🦢": "Swan",
  "🦖": "T-Rex",
  "🦅": "Eagle",
  "🦄": "Unicorn",
  "🐨": "Koala",
  "🐧": "Penguin",
  "🐥": "Front-Facing Baby Chick",
  "🦚": "Peacock"
};

const emojiWeHave = Object.keys(emojiData);

export default function App() {
  const [emojiName, setEmojiName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const findEmojiName = (event) => {
    setEmojiName("");
    var emoji = event.target.value;
    if (emoji in emojiData) {
      var name = emojiData[event.target.value];
      setEmojiName(name);
    } else {
      var error = "We don't have this emoji in our database !";
      setErrorMsg(error);
    }
  };

  const findEmojiNameOnClick = (emoji) => {
    var name = emojiData[emoji];
    setEmojiName(name);
  };

  return (
    <div className="App">
      <h1>Animal Emoji Interpreter</h1>
      <input
        type="text"
        placeholder="Put animal emoji to know its name"
        onChange={(event) => findEmojiName(event)}
      />

      {emojiName ? (
        <div className="result">
          <p style={{ fontWeight: "bold" }}>{`Its ${emojiName} 🖤`}</p>
        </div>
      ) : errorMsg !== "" ? (
        <div className="error">
          <p>{errorMsg}</p>
        </div>
      ) : null}

      <h3>Click any emoji to know its name</h3>
      {emojiWeHave.map((item, index) => {
        return (
          <span onClick={() => findEmojiNameOnClick(item)} key={index}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
