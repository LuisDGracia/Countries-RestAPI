
export default function CountryReducer(state, payload) {
	
	let originalSet = payload.data.original;


	let countries = [];

	switch (payload.type) {
		case "get all":
			return { ...state, original: payload.data, filtered: payload.data };

		case "get input":

			// If everythin has changed, search for both filters
			if( payload.country !== '' && payload.continent !== 'all' ){
				countries = originalSet.filter(
					(country) =>
						country.name.toLowerCase().includes( payload.country.toLowerCase() ) &&
						country.region.toLowerCase().includes( payload.continent.toLowerCase() )
				);

				// If continent has not been set, search by name
			}else if ( payload.continent === 'all' && payload.country !== '' ){
				countries = originalSet.filter((country) =>
					country.name.toLowerCase().includes(payload.country.toLowerCase())
				);

				// If the input is empty and the continent has changed
				// search by continent
			}else if( payload.continent !== 'all' && payload.country === '' ){
				countries = originalSet.filter((country) =>
					country.region.toLowerCase().includes(payload.continent.toLowerCase())
				);

				// If nothing has changed, return every country
			}else{
				countries = originalSet
			}

		return { ...state, filtered: countries, continent: payload.continent };

		default:
			break;
	}
}