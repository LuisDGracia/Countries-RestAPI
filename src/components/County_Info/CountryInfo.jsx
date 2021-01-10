import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../../axios-orders'
import { Container, BackBtn } from './CountryInfoStyled'


function CountryInfo() {

  const param = useParams()

  const [country, setCountry] = useState({})

  useEffect(() => {
    axios.get(`/name/${param.country}?fullText=true`)
    .then( info => {
      setCountry( ...info.data );
    })
  }, [])

  return (
    <Container>
      <BackBtn >
        <Link to="/" > Back </Link>
      </BackBtn>
      <h3>ID: {country.name}</h3>
    </Container>
  )
}

export default CountryInfo
