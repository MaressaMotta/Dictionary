import logo from "./heartbook.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="heartbook" />
      </header>
      <main>
        <Dictionary defaultKeyword="Hello" />
      </main>
      <footer className="App-footer">
        This project was coded by{" "}
        <a
        title="Instagram"
          href="https://www.instagram.com/maressa.codes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maressa Motta
        </a>{" "}
        and is{" "}
        <a
        title="Github"
          href="https://github.com/MaressaMotta/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}
