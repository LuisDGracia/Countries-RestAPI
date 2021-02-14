import React, { Fragment } from 'react'
import { Info, Data, Borders } from './RenderInfoStyled'

// ROUTER
import { useHistory } from 'react-router-dom';
import axios from '../../axios-orders'

function RenderInfo({ info, array }) {

  let history = useHistory();
  const CountryInfo = []
  let domains = [];
  let currencies = [];
  let borders = []

  const onClickHandler = ( alpha ) => {
    
    let countryName = ""

    axios.get(`/alpha/${alpha}?fields=name`)
      .then( ({ data }) => {
        countryName = data.name

        history.push(`/${countryName}`)
      })
  }
  
    
  for( let [key, value] of Object.entries(info) ){

    let number = value

    if( typeof number === 'number' ){
      number = value.toLocaleString();
      number = number.replaceAll('.',',')
    }
    CountryInfo.push(<Info key={key} >{key}: <Data key={number}>{ number }</Data></Info>)
  }


  // If array prop is present, do this code
  if( array ){
    for( let [key, value] of Object.entries(array)){
      value.map( index => {
        switch( key ){
          case 'Top Level Domain':
              domains.push(<Data key={index} style={{ textTransform: 'none' }} >{index}</Data>)
            break;
          case 'Currencies':
            currencies.push(<Data key={index.name} >{`${index.name} `}</Data>)
            break;
          case 'Borders':
              borders.push(
                <Borders key={index} onClick={ () => onClickHandler(index) } >
                  <Data key={index} >{index}</Data>
                </Borders>
              );
            break;
          default:
          break;
        }
        return false;
      })
    }
  }

  
  return (
    <Fragment>
      {CountryInfo}
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

export default RenderInfo
