import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../../axios-orders'
import React from 'react'
import { Container, Continent, Continents, ContinentsConteiner, Input, SearchContainer } from './FiltersStyled'

function Filters({ data, setData }) {

	const countries = data.original;

	const UpdateCountries = () => {

		let continent = document.getElementById('mySelect').value

		if( continent !== 'all' ){
			axios.get(`/region/${continent}`)
			.then( countries => {
				let newCountries = countries.data;
				setData.filter({ ...data.filter, continent: continent, data: newCountries })
			})
			.catch( error => console.log(error) );
		}else{
			axios.get(`/${continent}`)
			.then( countries => {
				let newCountries = countries.data;
				setData.filter({ ...data.filter, continent: continent, data: newCountries })
			})
			.catch( error => ( console.log(error) ));
		}

	}

	const SearchCountry = () => {
		
		let inputValue = document.getElementById('country').value.toLowerCase()
		
		if( inputValue !== ''){
			axios.get(`name/${inputValue}?fullText=false`)
			.then( countries => {
				let newCountries = countries.data;
				setData.filter({ ...data.filter, data: newCountries })
			})
			.catch( error => console.log(error) );
		}else if( inputValue === '' ){
			setData.filter({ ...data.filter, data: countries });
		}
	}

	return (
		<Container>
			<SearchContainer>
				<FontAwesomeIcon icon={ 'search' } />
				<Input onChange={ () => SearchCountry() } id='country' />
			</SearchContainer>

			<ContinentsConteiner >
				<Continents onChange={ () => UpdateCountries() } id="mySelect" >
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
