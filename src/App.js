import Layout from "./components/Layout/Layout";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function App() {

  library.add( faSun, faMoon, faSearch, faChevronDown );

  return (
    <Layout />
  );
}

export default App;
