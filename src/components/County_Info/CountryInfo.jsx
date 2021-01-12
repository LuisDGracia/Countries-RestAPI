import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../../axios-orders'
import RenderInfo from '../UI/RenderInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, BackBtn, InfoContainer, FlagContainer, Flag, DataContainer, H2 } from './CountryInfoStyled'


function CountryInfo() {

  const params = useParams()
  const [country, setCountry] = useState({})

  useEffect(() => {
    axios.get(`/name/${params.country}?fullText=true`)
    .then( info => {
      setCountry( ...info.data );
    })
    .catch( error => console.log( error ))

    return () => {
      setCountry({});
    }

  }, [params.country]);

  return (
    <Container>
        <Link to="/" style={{ textDecoration: 'none', width: '100px' }} >
          <BackBtn>
            <FontAwesomeIcon icon={ 'arrow-left' } />
            Back 
          </BackBtn>
        </Link>
      { Object.entries(country).length === 0 ? (<p>Loading...</p>)
        :
        <InfoContainer>
          <FlagContainer>
            <Flag src={country.flag} />
          </FlagContainer>
          <DataContainer>
            <H2>{country.name}</H2>
            <RenderInfo 
              info={{
                "Native Name": country.nativeName,
                "Population": country.population,
                "Region": country.region,
                "Sub Region": country.subregion,
                "Capital": country.capital,}} 
              array={{
                "Top Level Domain": country.topLevelDomain,
                "Currencies": country.currencies,
                "Borders": country.borders }}  />
          </DataContainer>
        </InfoContainer>
      }
    </Container>
  )
}

export default CountryInfo
