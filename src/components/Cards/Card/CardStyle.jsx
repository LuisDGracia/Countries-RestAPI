import styled from 'styled-components'

const Container = styled.div`
  width: 21%;
  margin-bottom: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
`

const Flag = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${ ({ image }) => image });
  background-size: 100% 100%;
`

const Name = styled.h2`
  margin: 0;
  font-weight: 600;
`

const Info = styled.p`
  margin: 0;
  text-transform: capitalize;
`

const Data = styled.span`
  font-weight: 400;
`

const InfoContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const FlagContainer = styled.div`
  width: 100%;
  height: 100%;
`

export{ Container, Flag, Name, Info, Data, InfoContainer, FlagContainer }