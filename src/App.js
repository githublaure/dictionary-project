import letscode from "./letscode.gif";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={letscode} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="text-center"> Coded by Laure Agrech</footer>
      </div>
    </div>
  );
}

export default App;
