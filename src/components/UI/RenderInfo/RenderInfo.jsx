import React, { Fragment } from 'react'
import { Info } from './RenderInfoStyled'

// ROUTER
import { useHistory } from 'react-router-dom';
import { numberFormat, iterateSubArrays } from './ArrayLogic';

export default function RenderInfo({ info, array }) {

  let history = useHistory();
  let countryInfo = [];
  let domains = [];
  let currencies = [];
  let borders = [];

  numberFormat( info, countryInfo )

  // If array prop is present, do this code
  if( array ){
    iterateSubArrays( array, domains, currencies, borders, history );
  }

  return (
    <Fragment>
      {countryInfo}
      {
        array === undefined ? <></> :
        <Fragment>
          <Info >Top Level Domain: {domains} </Info>
          <Info >Currencies: {currencies} </Info>
          <Info style={{ gridColumn: '1/-1' }} >Borders Countries: {borders} </Info>
        </Fragment>
      }
    </Fragment>
  )
}
