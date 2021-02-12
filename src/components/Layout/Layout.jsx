import React, { Fragment, useEffect, useState } from 'react'
import axios from '../../axios-orders'
import Content from '../Content/Content'
import Filters from '../FIlters/Filters'
import Header from '../Header/Header'
import { Route } from 'react-router-dom'
import CountryInfo from '../County_Info/CountryInfo'

function Layout() {

	const [countries, setCountries] = useState([])
	const [filter, setFilter] = useState({
		continent: "all",
		data: []
	})

	useEffect(() => {
		axios.get('/all')
			.then( info => {
				setCountries( info.data );
				setFilter( prevData => ({ ...prevData, data: info.data}) );
			}).catch( error => error)
	}, [])

	return (
		<Fragment>
			<Route path="/" exact >
				<Header />
				<Filters 
					data={{ 'original': countries, 'filter': filter }} 
					setData={{ 'countries': setCountries, 'filter': setFilter }} />
				<Content countries={filter} />
			</Route>
			<Route path="/:country">
				<Header />
				<CountryInfo />
			</Route>
		</Fragment>
	)
}

export default Layout
