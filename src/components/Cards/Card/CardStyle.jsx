import styled from 'styled-components'

const Container = styled.div``

const Flag = styled.img``

const Name = styled.p`
  font-weight: 600;
`

const Info = styled(Name)`
  text-transform: capitalize;
`

const Data = styled.span`
  font-weight: 400;
`

export{ Container, Flag, Name, Info, Data }