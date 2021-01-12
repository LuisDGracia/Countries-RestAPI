import Layout from "./components/Layout/Layout";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faSearch, faChevronDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { HashRouter as Router } from "react-router-dom";

function App() {

  library.add( faSun, faMoon, faSearch, faChevronDown, faArrowLeft );

  return (
    <Router >
      <Layout />
    </Router>
  );
}

export default App;
