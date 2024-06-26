import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>

      
      <main>
        <Dictionary defaultKeyword = "sunset"/>
      </main>
      <footer>
      This project was created by <a href="https://amira-fareh-portfolio.netlify.app" target='_blank' rel="noreferrer">Amira fareh</a> and is 
      <a href='https://github.com/AmiraFareh/react-dictionary' target='_blank' rel="noreferrer"> open-sourced on GitHub. </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
