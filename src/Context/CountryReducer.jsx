
export default function CountryReducer(state, { type, payload, continent }) {
	
	switch (type) {
		case "get all":
			return { original: payload, filtered: payload, continent: 'all' };

		case "get input":
			return { original: state.original, filtered: payload, continent: 'all' };

		case "get continent":
			return { original: state.original, filtered: payload, continent: continent };

		default:
			break;
	}
}