import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React and Morty</h1>
      <p>Morty Smith</p>
      <img
        alt="rick"
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      />
      <footer>
      <nav>
        <ul>
          <li><a>Home</a></li>
          <li><a>Favorits</a></li>
          <li><a>Information</a></li>
          <li><a>Kontakt</a></li>
        </ul>
      </nav>
      </footer>
    </div>
  );
}
export default App;
