import{ Component, Fragment } from "react";

// ROUTER
import { Redirect, Route, Switch } from "react-router-dom";

// COMPONENTS
import Filters from "../FIlters/Filters";
import Header from "../Header/Header";

// PAGES
import Content from "../../pages/Main/Content";
import CountryInfo from "../../pages/County_Info/CountryInfo";

// CONTEXT
import { CountryContext } from "../../Context/CountryContext";

export default class Layout extends Component {
  static contextType = CountryContext;

  componentDidMount() {
    this.context.getCountries();
  }

  render() {
    return (
      <Fragment>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Filters />
            <Content />
          </Route>

          <Route path="/:country" component={CountryInfo} />

          <Redirect to="/" />
        </Switch>
      </Fragment>
    );
  }
}
