import React from 'react'
import { Container } from '../Cards/Card/CardStyle'
import { Continent, Continents, Icon, Input, SearchContainer } from './FiltersStyled'

function Filters() {
  return (
    <Container>
      <SearchContainer>
        <Icon />
        <Input />
      </SearchContainer>

      <Continents>
        <Continent value='africa' >Africa</Continent>
        <Continent value='america' >America</Continent>
        <Continent value='asia' >Asia</Continent>
        <Continent value='europe' >Europe</Continent>
        <Continent value='oceania' >Oceania</Continent>
      </Continents>
    </Container>
  )
}

export default Filters
