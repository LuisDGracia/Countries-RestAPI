import React from 'react'
import { Container, Flag, Name, Data, Info } from './CardStyle'

function Card({ flag, name, info }) {  
  const CountryInfo = []
    
  for( let [key, value] of Object.entries(info) ){

    let number = value

    if( typeof number === 'number' ){
      number = value.toLocaleString();
      number = number.replaceAll('.',',')
    }

    CountryInfo.push(<Info key={key} >{key}: <Data>{ number }</Data></Info>)
  }

  return (
    <Container>
      <Flag src={flag} />
      <Name>{name}</Name>
      {CountryInfo}
    </Container>
  )
}

export default Card
