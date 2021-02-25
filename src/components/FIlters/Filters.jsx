import { memo, useContext } from 'react'
import { Container, Continent, Continents, ContinentsConteiner, Input, SearchContainer } from './FiltersStyled'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// CONTEXT
import { CountryContext } from '../../Context/CountryContext';

export default memo(function Filters() {

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
					<Continent value='Africa' >Africa</Continent>
					<Continent value='Americas' >Americas</Continent>
					<Continent value='Asia' >Asia</Continent>
					<Continent value='Europe' >Europe</Continent>
					<Continent value='Oceania' >Oceania</Continent>
				</Continents>
				<FontAwesomeIcon icon={ 'chevron-down' } />
			</ContinentsConteiner>

		</Container>
	)
})
