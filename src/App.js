import letscode from "./letscode.gif";
import "./App.css";
import Dictionary from "./Dictionary";
import githubj from "./githubj.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={letscode} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="text-center">
          {" "}
          This app was coded by{" "}
          <a
            href="https://www.linkedin.com/in/laure-agrech/"
            target="_blank"
            rel="noreferrer"
          >
            Laure Agrech,
          </a>{" "}
          is open-sourced on{" "}
          <a
            href="https://github.com/githublaure"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <img src={githubj} width="30px" alt="github" />
          </a>{" "}
          and{" "}
          <a
            href="https://laure-api-dictionary-react-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          <br />
        </footer>
      </div>
    </div>
  );
}
