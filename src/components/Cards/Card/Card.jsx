import { Container, Flag, Name, FlagContainer, InfoContainer } from './CardStyle'

//COMPONENTS
import RenderInfo from '../../UI/RenderInfo'

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
