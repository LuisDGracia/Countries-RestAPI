import { useContext } from 'react'
import { Container } from './ContentStyled';

//COMPONENTS
import Cards from '../../components/Cards/Cards';
import Loading from '../../components/UI/Loading/Loading';

// CONTEXT
import { CountryContext } from '../../Context/CountryContext';

function Content() {

	const { countries } = useContext(CountryContext)

	return (
		<Container>
			{ countries.length === 0 ? <Loading /> :	<Cards countries={countries} /> }
		</Container>
	);
}

export default Content
