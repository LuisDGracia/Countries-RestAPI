import { useState, useEffect, useContext } from 'react'
import { Container } from './CardsStyled'

// COMPONENTS
import Card from './Card/Card'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ThemeContext } from 'styled-components'

export default function Cards({ countries }) {

	const theme = useContext( ThemeContext )

	const [count, setCount] = useState({
		prev: 0,
		next: 16,
	})

	const loaderScrollStyle = {
    width: "100%",
    textAlign: "center",
    color: theme.colors.Text,
  };

	const [hasMore, setHasMore] = useState(true)
	
	const [current, setCurrent] = useState(countries.slice(count.prev, count.next))

	const getMoreData = () => {
		if( current.length === countries.length ){
			setHasMore( false );
			return;
		}
		setTimeout(() => {
			setCurrent(current.concat(countries.slice(count.prev + 16, count.next + 16)))
		}, 2000)
		setCount( prevState => ({ prev: prevState.prev + 16, next: prevState.next + 16 }))
	}

	useEffect(() => {
		setHasMore( true )
		setCurrent(countries.slice( 0, 16));
		setCount(({ prev: 0, next: 16 }));
	}, [countries] )

	return (
		<Container>
			<InfiniteScroll
			dataLength={current.length}
			next={getMoreData}
			hasMore={hasMore}
			loader={<h2 style={ loaderScrollStyle }>Loading...</h2>}
			style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }} >

				{ <RenderCards current={current} /> }

			</InfiniteScroll>
		</Container>
	)
}

function RenderCards({ current }) {
  return (
		current.map((country, i) => {
      return (
				<Card
					key={i}
					flag={country.flag}
					name={country.name}
					info={{
						population: country.population,
						region: country.region,
						capital: country.capital,
					}}
				/>
      )
    })
	)
}
