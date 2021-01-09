import React, { Fragment, useEffect, useState } from 'react'
import axios from '../../axios-orders'
import Content from '../Content/Content'
import Filters from '../FIlters/Filters'
import Header from '../Header/Header'

function Layout() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('/all')
      .then( info => {
        setCountries( info.data );
      })
      .catch( error => error)
  }, [])

  return (
    <Fragment>
      <Header />
      <Filters />
      <Content countries={countries} />
    </Fragment>
  )
}

export default Layout
