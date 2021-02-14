
export default function CountryReducer(state, { type, payload }) {
	
	switch (type) {
		case "get all":
			return { original: payload, filtered: payload };

		default:
			break;
	}
}