import React, { Fragment } from 'react'
import Cards from '../Cards/Cards';

function Content({ countries }) {
  return (
    <Fragment>
      { countries.length === 0 ? 
        (<p>Loading...</p>) :
        <Cards countries = {countries} />
      }
    </Fragment>
  )
}

export default Content
