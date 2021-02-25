
export default function CountryReducer(state, payload) {
	
	let originalLength = 0;
	let filteredLength = 0;

	let originalSet = [];
	let filteredSet = [];

	if( payload.data.original ){
		originalLength = payload.data.original.length;
		filteredLength = payload.data.filtered.length;
	
		originalSet = payload.data.original;
		filteredSet = payload.data.filtered;
	}

	let countries = [];

	switch (payload.type) {
		case "get all":
			return { ...state, original: payload.data, filtered: payload.data };

		case "get input":
			if( originalLength >= filteredLength ){
				console.log( filteredSet )
				countries = filteredSet.filter( country => country.name.includes( payload.search, 0 ) )
			}else if ( originalLength === filteredLength ){
				countries = originalSet.filter( country => country.name.includes( payload.search, 0 ) )
			}

			return { ...state, filtered: countries, continent: 'all' };

		case "get continent":

			if( originalLength >= filteredLength ){
				console.log( filteredSet )
				countries = filteredSet.filter( country => country.region.includes( payload.search, 0 ) )
			}else if ( originalLength <= filteredLength ){
				countries = originalSet.filter( country => country.region.includes( payload.search, 0 ) )
			}

			return { ...state, filtered: countries, continent: payload.continent };

		default:
			break;
	}
}