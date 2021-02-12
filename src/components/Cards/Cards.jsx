import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card/Card'
import { Container } from './CardsStyled'
import InfiniteScroll from 'react-infinite-scroll-component'

function Cards({ countries }) {

	console.log( countries )
	
	const [count, setCount] = useState({
		prev: 0,
		next: 12,
	})

	const [hasMore, setHasMore] = useState(true)
	
	const [current, setCurrent] = useState(countries["data"].slice(count.prev, count.next))

	const getMoreData = () => {
		console.log(current.length, countries["data"].length);
		console.log(current.length === countries["data"].length);
		if( current.length === countries["data"].length ){
			setHasMore( false );
			return;
		}
		setTimeout(() => {
			console.log( current.concat(countries["data"].slice(count.prev + 12, count.next + 12)) )
			setCurrent(current.concat(countries["data"].slice(count.prev + 12, count.next + 12)))
		}, 2000)
		setCount( prevState => ({ prev: prevState.prev + 12, next: prevState.next + 12 }))
	}

	useEffect(() => {
		setHasMore( true )
		setCurrent(countries["data"].slice( 0, 12));
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
