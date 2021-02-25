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

	const getCountry = ( event ) => {
		let country = event.target.value;

		if (country !== "") {
			dispatch({ type: "get input", data: countries, search: country });
		} else if (country === "") {
			dispatch({ type: "get all", data: countries.original });
		}

	}

	const getCountriesByContinent = ( event ) => {
		let continent = event.target.value;

		if( continent !== 'all' ){
			dispatch({ type: "get continent", data: countries, search: continent });
		}else{
			dispatch({ type: "get all", data: countries.original });
		}
	}

	return (
		<CountryContext.Provider value={{
			countries: countries.filtered,
			continent: countries.continent,
			getCountry,
			getCountries,
			getCountriesByContinent }} >
			{children}
		</CountryContext.Provider>
	)
}
