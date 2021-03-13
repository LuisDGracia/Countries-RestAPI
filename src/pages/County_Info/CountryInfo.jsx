import { useState, useEffect } from 'react'
import { Container, BackBtn, InfoContainer, FlagContainer, Flag, DataContainer, H2 } from './CountryInfoStyled'

//ROUTER
import { Link, useParams } from 'react-router-dom'
import axios from '../../axios-orders'

// COMPONENTS
import RenderInfo from '../../components/UI/RenderInfo/RenderInfo'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CountryInfo() {

  const params = useParams()
  const [country, setCountry] = useState({})

  useEffect(() => {

    let filters =
      "fields=flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;borders";

    axios.get(`/name/${params.country}?${filters}`)
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
        <InfoComponent country={ country } />
      }
    </Container>
  )
}

const InfoComponent = ({ country }) => {
  return (
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
  )
}
