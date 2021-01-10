import Layout from "./components/Layout/Layout";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from "react-router-dom";

function App() {

  library.add( faSun, faMoon, faSearch, faChevronDown );

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
