import React from 'react'
import Card from './Card/Card'
import { Container } from './CardsStyled'

function Cards({ countries }) {

  const LoadCountryInfo = ( name ) => {
    window.location.pathname = `/${name}`
  }

  return (
    <Container>
      {countries.map( country => {
        return(
          <Card 
            flag={ country.flag } 
            name={ country.name } 
            info={{ 
              'population': country.population, 
              'region': country.region, 
              'capital': country.capital 
            }}
            key={ country.name } 
            clicked={ () => LoadCountryInfo( country.name )  } />
        )
      })}
    </Container>
  )
}

export default Cards
