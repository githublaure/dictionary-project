import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [search, setSearch] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleDisplayPhotos(response) {
    setPhotos(response.data.photos);
  }

  function dictionary(event) {
    event.preventDefault();
    // API dictionary documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${search}`;
    axios.get(apiUrl).then(handleResponse);

    // API pexels for photos
    let pexelsApiKey =
      "563492ad6f91700001000001a080dcf3127941029259c9153d94df32";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${search}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handleDisplayPhotos);
  }

  function handleSubmit(event) {
    setSearch(event.target.value);
  }

<<<<<<< HEAD
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={null}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plant...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
=======
  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={dictionary} className="form">
          <input type="search" onChange={handleSubmit} />
        </form>
        <div className="hint">
          suggested words: sunset, wine, yoga, plant...
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
>>>>>>> 009d461d85a89fb3bf4ea1ba7720758268ef7d8b
}
