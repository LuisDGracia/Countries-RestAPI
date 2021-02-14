import { useContext } from 'react'
import { Container, Continent, Continents, ContinentsConteiner, Input, SearchContainer } from './FiltersStyled'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CONTEXT
import { CountryContext } from '../../Context/CountryContext';

function Filters() {

	const { getCountry, getCountriesByContinent } = useContext(CountryContext);

	return (
		<Container>
			<SearchContainer>
				<FontAwesomeIcon icon={ 'search' } />
				<Input onChange={ ( event ) => getCountry( event ) } id='country' />
			</SearchContainer>

			<ContinentsConteiner >
				<Continents onChange={ ( event ) => getCountriesByContinent( event ) } id="mySelect" >
					<Continent disabled>Filter By Continent</Continent>
					<Continent value='all' >All</Continent>
					<Continent value='africa' >Africa</Continent>
					<Continent value='americas' >Americas</Continent>
					<Continent value='asia' >Asia</Continent>
					<Continent value='europe' >Europe</Continent>
					<Continent value='oceania' >Oceania</Continent>
				</Continents>
				<FontAwesomeIcon icon={ 'chevron-down' } />
			</ContinentsConteiner>

		</Container>
	)
}

export default Filters
