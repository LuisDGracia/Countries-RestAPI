import { useContext, useEffect } from 'react'

// ROUTER
import { Route, Switch } from 'react-router-dom'

// COMPONENTS
import Content from '../Content/Content'
import Filters from '../FIlters/Filters'
import Header from '../Header/Header'
import CountryInfo from '../County_Info/CountryInfo'

// CONTEXT
import { CountryContext } from '../../Context/CountryContext'


function Layout() {
	const { getCountries } = useContext(CountryContext);

	useEffect(() => {
		getCountries();
		// eslint-disable-next-line
	}, []);

	return (
		<Switch>
			<Route path="/" exact>
				<Header />
				<Filters />
				<Content />
			</Route>
			<Route path="/:country">
				<Header />
				<CountryInfo />
			</Route>
		</Switch>
	);
}

export default Layout
