import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card/Card'
import { Container } from './CardsStyled'
import InfiniteScroll from 'react-infinite-scroll-component'

function Cards({ countries }) {

  const [count, setCount] = useState({
    prev: 0,
    next: 16,
  })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(countries.slice(count.prev, count.next))
  const getMoreData = () => {
    if( current.length === countries.length ){
      setHasMore( false );
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(countries.slice(count.prev + 10, count.next + 10)))
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  }

  useEffect(() => {
    setCurrent( countries.slice(count.prev, count.next) )
  }, [countries, count])

  return (
    <Container>
      <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h2 style={{width: '100%', textAlign: 'center' }}>Loading...</h2>}
      style={{ display: 'flex', justifyContent:'space-between', flexFlow: 'row wrap' }} >
        {current.map( country => {
          return(
            <Link to={`/${country.name}`} key={country.name}>
              <Card 
                flag={ country.flag } 
                name={ country.name } 
                info={{ 
                  'population': country.population, 
                  'region': country.region, 
                  'capital': country.capital 
                }}
                key={ country.name } />
            </Link>
          )
        })}
      </InfiniteScroll>
    </Container>
  )
}

export default Cards
