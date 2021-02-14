import { useReducer } from 'react'
import { CountryContext } from './CountryContext'
import CountryReducer from './CountryReducer'

import axios from '../axios-orders'

const initialState = { original: [], filtered: [], continent: 'all' }

export default function CountryState({ children }) {
	
	const [countries, dispatch] = useReducer(CountryReducer, initialState);

	const getCountries = () => {
		console.log( "countries" )
		axios
			.get("/all?fields=name;population;region;capital;flag")
			.then(({ data }) => {
				dispatch({ type: "get all", payload: data })
			})
			.catch((error) => error);
	}

	const getCountry = ( event ) => {
		console.log( "updated" )
		let country = event.target.value;

		if (country !== "") {
			axios
				.get(`name/${country}?fullText=false`)
				.then(({ data }) => {
					dispatch({ type: 'get input', payload: data });
				})
				.catch((error) => console.log(error));
		} else if (country === "") {
			dispatch({ type: 'get input', payload: countries.original });
		}

	}

	const getCountriesByContinent = ( event ) => {
		let continent = event.target.value;

		if( continent !== 'all' ){
			axios.get(`/region/${continent}?fields=name;population;region;capital;flag`)
			.then( ({ data }) => {
				dispatch({ type:'get continent', payload: data })
			})
			.catch( error => console.log(error) );
		}else{
			axios.get(`/${continent}?fields=name;population;region;capital;flag`)
			.then( ({ data }) => {
				dispatch({ type:'get continent', payload: data, continent: continent })
			})
			.catch( error => ( console.log(error) ));
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
