import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="love" />
      </main>
      <footer className="App-footer">
        <small>Coded by Maressa Motta</small>
      </footer>
    </div>
  );
}
