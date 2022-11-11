import styled from "styled-components"


export default function Card({img,name}){
    return(
        <Card1>
        <h2>{name}</h2>
      <img
        alt={name}
        src={img}
      />
      <button>Click</button>
      </Card1>
    )
}

 const Card1 = styled.div`
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