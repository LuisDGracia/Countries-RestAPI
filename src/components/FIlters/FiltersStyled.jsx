import styled from 'styled-components'

const Container = styled.div`
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchContainer = styled.div``

const Icon = styled.label``

const Input = styled.input.attrs( () => ({
  type: 'text',
}))``

const Continents = styled.select``

const Continent = styled.option``

export { Container, SearchContainer, Icon, Input, Continents, Continent }