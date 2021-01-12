import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card/Card'
import { Container } from './CardsStyled'

function Cards({ countries }) {
  return (
    <Container>
      {countries.map( country => {
        return(
          <Link to={`/${country.name}`}>
            <Card 
              flag={ country.flag } 
              name={ country.name } 
              info={{ 
                'population': country.population, 
                'region': country.region, 
                'capital': country.capital 
              }}
              key={ country.name } />
            </Link>
        )
      })}
    </Container>
  )
}

export default Cards
