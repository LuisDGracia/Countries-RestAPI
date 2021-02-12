import React from 'react'
import Cards from '../Cards/Cards';
import { Container } from './ContentStyled';

function Content({ countries }) {

  return (
    <Container>
      {countries["data"].length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Cards countries={countries} />
      )}
    </Container>
  );
}

export default Content
