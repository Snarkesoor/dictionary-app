import './App.css';
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="App-header">
        <strong>Dictionary</strong>
      </h1>
      <Search />
      <p className="phonetic">
      /gold/
      </p>
         <footer className="footer"><a href="https://github.com/Snarkesoor/dictionary-app" rel="noreferrer" target="_blank">Open-source code</a> by Marloes Oomen 👩🏼‍💻</footer>
      </div>
    </div>
  );
}

export default App;
