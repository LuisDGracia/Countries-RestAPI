import { useReducer } from 'react'
import { CountryContext } from './CountryContext'
import CountryReducer from './CountryReducer'

import axios from '../axios-orders'

const initialState = { original: [], filtered: [], continent: 'all' }

export default function CountryState({ children }) {
	
	const [countries, dispatch] = useReducer(CountryReducer, initialState);

	const getCountries = () => {
		axios
			.get("/all?fields=name;population;region;capital;flag")
			.then(({ data }) => {
				dispatch({ type: "get all", data: data })
			})
			.catch((error) => error);
	}

	const getCountry = ( ) => {
		let country = document.getElementById('country').value
		let continent = document.getElementById('continent').value

		dispatch({ type: "get input", data: countries, country: country, continent: continent });

	}

	return (
		<CountryContext.Provider value={{
			countries: countries.filtered,
			continent: countries.continent,
			getCountry,
			getCountries}} >
			{children}
		</CountryContext.Provider>
	)
}
