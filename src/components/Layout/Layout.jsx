import React, { Fragment, useEffect, useState } from 'react'
import axios from '../../axios-orders'
import Content from '../Content/Content'
import Filters from '../FIlters/Filters'
import Header from '../Header/Header'

function Layout() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState([])

  useEffect(() => {
    axios.get('/all')
      .then( info => {
        setCountries( info.data );
        setFilter( info.data );
      })
      .catch( error => error)
  }, [])

  return (
    <Fragment>
      <Header />
      <Filters 
        data={{ 'original': countries, 'filter': filter }} 
        setData={{ 'countries': setCountries, 'filter': setFilter }} />
      <Content countries={filter} />
    </Fragment>
  )
}

export default Layout
