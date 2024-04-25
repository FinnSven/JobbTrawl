import logo from './logo.svg';
import './App.css';

function App() {
  const handleScrapeJobs = async () => {
    const response = await fetch('http://localhost:3000/scrape');
    const data = await response.json();
    console.log("scraping jobs for search results");
  };
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
