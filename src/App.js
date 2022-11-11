import "./App.css";
import styled from "styled-components";
import { useState, useEffect} from 'react';
import Header from "./Header";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  const [characters, setCharacters] = useState([]);

   const loadrickmort = async ()=> {
     const response = await fetch("https://rickandmortyapi.com/api/character");
     const data = await response.json();
     setCharacters(data["results"]);
   }
     useEffect(()=>{
     loadrickmort();
     }, []);
  return (
    <Main>
      <Header />
      {characters.map((Character) => {
        return (
          <Card
            key={Character.id}
            img={Character.image}
            name={Character.name}
          />
        );
      })}
      <Navbar />
    </Main>
  );
}
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export default App;
