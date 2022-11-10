import "./App.css";
import styled from "styled-components"

function App() {
  return (
    <Main>
      <Header><i>React and Morty</i></Header>
      <Card>
      <h2>Morty Smith</h2>
      <img
        alt="rick"
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      />
      </Card>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Navbar>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href = "#">Favorits</a></li>
          <li><a href = "#">Information</a></li>
          <li><a href = "#">Kontakt</a></li>
        </ul>
      </Navbar>
    </Main>
  );
}
const Main = styled.main`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
`

const Header = styled.h1`
color:coral;
font-size:60px;
width:100%;
font-family: Times New Roman;
background-color:skyblue;
background-width:100%;
margin:0;
`
const Card = styled.div`
margin-top:20px;
border:5px solid orange;
border-radius: 15px 15px;
width:350px;

img{
  transition:2s;
}

img:hover {
  background-color:black;
  transform:scaleX(-1)
}
`
const Navbar = styled.nav`
width:100%;
background-color:skyblue;
ul{background-color:white;
  display:flex;
  justify-content:space-around;
  list-style-type:none;
}
a{
  transition:2s;
  text-decoration:none;
  color:coral;
}
a:hover{
  box-shadow: 4px 4px 4px 4px wheat;
  font-size:20px;
}
`
export default App;
