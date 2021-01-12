import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  a{
    width: 21%;
    text-decoration: none;

    
    @media${device.tablet}{
      width: 45%;
    }
    
    @media${device.mobileL}{
      width: 100%;
    }
  }
`

export {Container}