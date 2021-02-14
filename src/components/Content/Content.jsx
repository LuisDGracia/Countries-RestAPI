import { useContext } from 'react'
import { Container } from './ContentStyled';

//COMPONENTS
import Cards from '../Cards/Cards';

// CONTEXT
import { CountryContext } from '../../Context/CountryContext';

function Content() {

	const { countries } = useContext(CountryContext)

	return (
		<Container>
			{countries.length === 0 ? (
				<p>Loading...</p>
			) : (
				<Cards countries={countries} />
			)}
		</Container>
	);
}

export default Content
