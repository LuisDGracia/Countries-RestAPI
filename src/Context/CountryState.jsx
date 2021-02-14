import { useReducer } from 'react'
import { CountryContext } from './CountryContext'
import CountryReducer from './CountryReducer'
import axios from '../axios-orders'

const initialState = { original: [], filtered: [], continent: 'all' }

export default function CountryState({ children }) {
	
	const [countries, dispatch] = useReducer(CountryReducer, initialState);

	const getCountries = () => {
		axios
			.get("/all")
			.then(({ data }) => {
				dispatch({ type: "get all", payload: data })
			})
			.catch((error) => error);
	}

	const getCountry = () => {
		console.log("getCountry");
	}

	const getCountriesByContinent = () => {
		console.log("getCountriesByContinent");
	}

	return (
		<CountryContext.Provider value={{ 
			countries2: countries.filtered,
			continent: countries.continent,
			getCountry,
			getCountries,
			getCountriesByContinent }} >
			{children}
		</CountryContext.Provider>
	)
}
