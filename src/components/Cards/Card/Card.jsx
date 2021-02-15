import { memo } from 'react';
import { Container, Name, FlagContainer, InfoContainer } from './CardStyle'

//COMPONENTS
import RenderInfo from '../../UI/RenderInfo'

// ROUTER
import { Link } from 'react-router-dom'

export default memo(function Card({ flag, name, info}) {  

	console.log( name )

	return (
    <Link to={`/${name}`}>
      <Container>
        <FlagContainer flagUrl={flag} alt={`${name} flag`}></FlagContainer>
        <InfoContainer>
          <Name>{name}</Name>
          <RenderInfo info={info} />
        </InfoContainer>
      </Container>
    </Link>
  );
})
