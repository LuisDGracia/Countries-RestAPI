import Layout from "./components/Layout/Layout";

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faSearch, faChevronDown, faArrowLeft, faHourglassStart } from '@fortawesome/free-solid-svg-icons'

// ROUTER
import { HashRouter as Router } from "react-router-dom";

// CONTEXT
import CountryState from "./Context/CountryState";

library.add( faSun, faMoon, faSearch, faChevronDown, faArrowLeft, faHourglassStart );

function App() {
	return (
		<Router >
			<CountryState>
				<Layout />
			</CountryState>
		</Router>
	);
}

export default App;
