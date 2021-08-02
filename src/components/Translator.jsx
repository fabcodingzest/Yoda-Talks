import { useState } from "react";

const url = `https://api.funtranslations.com/translate/yoda.json`;

const constructURL = (inputValue) => {
  return `${url}?text=${encodeURI(inputValue)}`;
};

const alertAboutError = (err) => {
  console.log(err);

  alert(
    "Hey, something is not working! Please try back in an hour or so and if issue still persists, contact me from my socials"
  );
};

export const Translator = () => {
  const [translatedValue, setTranslatedValue] = useState("");

  const [input, setInput] = useState("");
  const handleEnglishInput = (e) => {
    setInput(e.target.value);
  };

  const handleTranslation = () => {
    if (input !== "") {
      const finalURL = constructURL(input);
      fetch(finalURL)
        .then((res) => res.json())
        .then((data) => setTranslatedValue(data.contents.translated))
        .catch((error) => alertAboutError(error));
    } else if (input === "") {
      alert("Message box cannot be empty!");
    }
  };
  return (
    <div id="translator" className="container">
      <textarea
        onChange={handleEnglishInput}
        id="english-text"
        placeholder="Enter the message you want to translate..."
      ></textarea>
      <button onClick={handleTranslation}>Translate to Yoda</button>
      <p>
        Translation will come here
        <span role="img" aria-labelledby="Hand down">
          👇
        </span>
      </p>
      <div id="translated-text">{translatedValue}</div>
    </div>
  );
};
