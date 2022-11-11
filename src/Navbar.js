import styled from "styled-components"


export default function Navbar(){
    return(
        <Navbar1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href = "#">Favorits</a></li>
          <li><a href = "#">Information</a></li>
          <li><a href = "#">Kontakt</a></li>
        </ul>
        </Navbar1>
    )
}

const Navbar1 = styled.nav`
width:100%;
background-color:skyblue;
ul{background-color:white;
  display:flex;
  justify-content:space-around;
  list-style-type:none;
  height:100%;
  position:sticky;
  bottom:0px;
  top:0px;
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