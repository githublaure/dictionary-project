import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <ul>
        {props.phonetics.map((phonetic, index) => {
          function playAudio(event) {
            event.preventDefault();
            let playAudio = new Audio(phonetic.audio);
            playAudio.play();
          }

          return (
            <li key={index}>
              {" "}
              <strong>Phonetics:</strong>
              {phonetic.text}{" "}
              <button onClick={playAudio}>
                <img src="/img/audio.svg" alt="audio icon" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
