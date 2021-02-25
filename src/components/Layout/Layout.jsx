import { Fragment, useContext, useEffect } from 'react'

// ROUTER
import { Redirect, Route, Switch } from 'react-router-dom'

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
		<Fragment>
			<Header />

			<Switch>
				<Route path="/" exact>
					<Filters />
					<Content />
				</Route>

				<Route path="/:country" component={ CountryInfo } />

				<Redirect to="/" />
			</Switch>

		</Fragment>
	);
}

export default Layout
