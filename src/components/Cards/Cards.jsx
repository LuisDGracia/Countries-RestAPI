import { useState, useEffect } from 'react'
import { Container } from './CardsStyled'

// COMPONENTS
import Card from './Card/Card'
import InfiniteScroll from 'react-infinite-scroll-component'

// ROUTER
import { Link } from 'react-router-dom'

function Cards({ countries }) {

	const [count, setCount] = useState({
		prev: 0,
		next: 12,
	})

	const [hasMore, setHasMore] = useState(true)
	
	const [current, setCurrent] = useState(countries.slice(count.prev, count.next))

	const getMoreData = () => {
		if( current.length === countries.length ){
			setHasMore( false );
			return;
		}
		setTimeout(() => {
			setCurrent(current.concat(countries.slice(count.prev + 12, count.next + 12)))
		}, 2000)
		setCount( prevState => ({ prev: prevState.prev + 12, next: prevState.next + 12 }))
	}

	useEffect(() => {
		setHasMore( true )
		setCurrent(countries.slice( 0, 12));
		setCount(({ prev: 0, next: 12 }));
	}, [countries] )

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
