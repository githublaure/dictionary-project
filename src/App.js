import pinkcutefolder from "./pinkcutefolder.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={pinkcutefolder} className="App-logo img-fluid" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="http://wwww.google.fr" className="btn btn-primary">
            Search
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center"> Coded by Laure</footer>
      </div>
    </div>
  );
}

export default App;
