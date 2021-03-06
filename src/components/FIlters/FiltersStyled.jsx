import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

const Container = styled.div`
  min-height: 150px;
  padding: 0 40px;
  background-color: ${ ({ theme }) => theme.colors.Background };
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

`

const SearchContainer = styled.div`
  width: 35%;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${ ({ theme }) => theme.colors.Elements };
  color: ${ ({ theme }) => theme.colors.Text };
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);

  @media${device.tablet}{
    width: 100%;
    padding: 20px;
    margin-bottom: 30px;
  }
`

const Input = styled.input.attrs( () => ({ type: 'text', placeholder: 'Search for a country...' }))`
  width: 90%;
  background: none;
  border: none;
  margin: 5px 0px;
  padding: 0 20px;

  color: ${ ({ theme }) => theme.colors.Text };

  &:focus{
    outline:none;
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

  @media${device.tablet}{
    align-self: start;
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