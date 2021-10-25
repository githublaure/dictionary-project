import letscode from "./letscode.gif";
import "./App.css";
import Dictionary from "./Dictionary";
import githubj from "./githubj.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={letscode} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="code" />
        </main>

        <footer className="text-center">
          {" "}
          Coded by Laure Agrech{" "}
          <a
            href="https://github.com/githublaure"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubj} width="30px" alt="github" />
          </a>
          <br />
        </footer>
      </div>
    </div>
  );
}

export default App;
