import styled from 'styled-components'

const Container = styled.div`
  width: 21%;
  max-height: 300px;
  margin-bottom: 40px;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.3);
  border-radius: 5px;
  background-color: ${ ({ theme }) => theme.colors.Elements };
`

const Flag = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
`

const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${ ({ theme }) => theme.colors.Text }
`

const Info = styled(Name)`
  margin: 0;
  font-size: 0.9em;
  text-transform: capitalize;
`

const Data = styled.span`
  font-weight: 400;
`

const InfoContainer = styled.div`
  height: 50%;
  padding-left: 20px;
`

const FlagContainer = styled.div`
  width: 100%;
  height: 50%;
`

export{ Container, Flag, Name, Info, Data, InfoContainer, FlagContainer }