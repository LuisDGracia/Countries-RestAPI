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
        setData.filter( newCountries )
      })
      .catch( error => error );
    }else{
      axios.get(`/${continent}`)
      .then( countries => {
        let newCountries = countries.data;
        setData.filter( newCountries )
      })
      .catch( error => error );
    }

  }

  const SearchCountry = () => {
    
    let inputValue = document.getElementById('country').value.toLowerCase()
    let filteredCountries = []

    if( inputValue !== ''){
      filteredCountries.push(
        countries.filter( country => {
          let countryLower = country.name.toLowerCase()
          if( countryLower.includes(inputValue) ){
            return country;
          }else return false;
        })
      );
      setData.filter( ...filteredCountries );
    }else if( inputValue === '' ){
      setData.filter( countries )
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
          <Continent disabled >Filter By Continent</Continent>
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
