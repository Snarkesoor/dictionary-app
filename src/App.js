import './App.css';
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="App-header">
        <em>Dictionary</em>
      </h1>
      <Search />
         <footer className="footer"><a href="https://github.com/Snarkesoor/dictionary-app" rel="noreferrer" target="_blank">Open-source code</a> by Marloes Oomen 👩🏼‍💻</footer>
      </div>
    </div>
  );
}

export default App;
