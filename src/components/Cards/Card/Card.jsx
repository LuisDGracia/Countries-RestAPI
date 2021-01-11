import React from 'react'
import RenderInfo from '../../UI/RenderInfo'
import { Container, Flag, Name, FlagContainer, InfoContainer } from './CardStyle'

function Card({ flag, name, info, clicked }) {  
  return (
    <Container onClick={ clicked } >
      <FlagContainer>
       <Flag src={flag} loading="lazy" alt={`${name} flag`} />
      </FlagContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <RenderInfo info={info} />
      </InfoContainer>
    </Container>
  )
}

export default Card
