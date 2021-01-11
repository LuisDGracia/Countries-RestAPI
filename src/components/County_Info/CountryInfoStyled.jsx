import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  background-color: ${ ({ theme }) => theme.colors.Background };
  display: flex;
  flex-flow: column wrap;
  align-items: space-arround;
`
const InfoContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
`

const FlagContainer = styled.div`
  width: 50%;
  height: 100%;
`

const Flag = styled.img`
  width: 100%;
  min-height: 100%;
`

const BorderText = styled.p`
  color: ${ ({theme}) => theme.colors.Text };
`

const Borders = styled.div``

const BackBtn = styled.div`
  width: 100px;
  padding: 10px 0;
  background-color: ${ ({ theme }) => theme.colors.Elements };
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.3);
  border-radius: 10px;

  color: ${ ({theme}) => theme.colors.Text };

  display: flex;
  justify-content: space-evenly;
  align-content: center;
  cursor: pointer;

  a{
    color: ${ ({theme}) => theme.colors.Text };
    text-decoration: none;
  }

  a:visited{
    color: ${ ({theme}) => theme.colors.Text };
  }
`

const DataContainer = styled.div`
  width:50%;
  min-height: 100%;
  padding-left: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-tempplate-rows: auto;
  grid-gap: 10px;

  p{
    font-size: 14px;
  }
`

const H2 = styled.h2`
  color: ${ ({theme}) => theme.colors.Text };
  grid-column: 1/-1;
`

export{ Container, FlagContainer, Flag, BorderText, Borders, BackBtn, InfoContainer, DataContainer, H2 }