import styled from 'styled-components'

const Container = styled.div`
  padding: 40px;
  background-color: ${ ({ theme }) => theme.colors.Background };
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchContainer = styled.div`
  width: 35%;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${ ({ theme }) => theme.colors.Elements };
  color: ${ ({ theme }) => theme.colors.Text };
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);
`

const Input = styled.input.attrs( () => ({ type: 'text', placeholder: 'Search for a country...' }))`
  width: 95%;
  background: none;
  border: none;
  margin: 5px 0px;
  padding: 0 20px;

  &:focus{
    outline:none;
    color: ${ ({ theme }) => theme.colors.Text };
  }

  &::placeholder{
    color: ${ ({ theme }) => theme.colors.Text };
  }
`

const Continents = styled.select`
  padding: 15px;
  color: ${ ({ theme }) => theme.colors.Text };
  background-color: ${ ({ theme }) => theme.colors.Elements };
  border-color: ${ ({ theme }) => theme.colors.Elements };
  cursor: pointer;
  
  border-radius: 5px;

  // Arrow
  appearance: none;

  &:focus{
    outline: none;
  }

  &:hover{
    outline: none;
  }
`

const Continent = styled.option`
  background-color: ${ ({ theme }) => theme.colors.Background };
`
const ContinentsConteiner = styled.div`
  cursor: pointer;
  padding-right: 10px;
  border-radius: 5px;
  background-color: ${ ({ theme }) => theme.colors.Elements };
  color: ${ ({ theme }) => theme.colors.Text };
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);
`

export { Container, SearchContainer, Input, Continents, Continent, ContinentsConteiner }