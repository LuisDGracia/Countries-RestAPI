import { Info, Data, Borders } from "./RenderInfoStyled";

// ROUTER
import axios from "../../../axios-orders";

export function iterateSubArrays(array, domains, currencies, borders, history) {
  let onBorderClickHandler = (alpha) => {
    let countryName = "";

    axios.get(`/alpha/${alpha}?fields=name`).then(({ data }) => {
      countryName = data.name;
      history.push(`/${countryName}`);
    });
  };

  for (let [key, value] of Object.entries(array)) {
    value.map((index) => {
      switch (key) {
        case "Top Level Domain":
          domains.push(
            <Data key={index} style={{ textTransform: "none" }}>
              {index}
            </Data>
          );
          break;
        case "Currencies":
          currencies.push(<Data key={index.name}>{`${index.name} `}</Data>);
          break;
        case "Borders":
          borders.push(
            <Borders key={index} onClick={() => onBorderClickHandler(index)}>
              <Data key={index}>{index}</Data>
            </Borders>
          );
          break;
        default:
          break;
      }
      return false;
    });
  }
}

export function numberFormat( info, countryInfo ){

  for (let [key, value] of Object.entries(info)) {
    let number = value;

    if (typeof number === "number") {
      number = value.toLocaleString();
      number = number.replaceAll(".", ",");
    }
    countryInfo.push(
      <Info key={key}>
        {key}: <Data key={number}>{number}</Data>
      </Info>
    );
  }

}

