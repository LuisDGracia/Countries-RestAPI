import styled from 'styled-components'
import { device } from '../../styles/mediaQueries';

const HeaderStyle = styled.header`
  position:relative;
  z-index:10;
  height: 70px;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.Elements };
  box-shadow: 0 0px 10px hsla(0, 0%, 0%, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1{
    color: ${ ({ theme }) => theme.colors.Text };

    @media${device.tablet}{
      font-size: 16px;
    }
  }
`

const Toggler = styled.label`
  color: ${ ({ theme }) => theme.colors.Text };

  svg{
    margin-right: 10px;
  }

  &:hover{
    cursor: pointer;
  }
`

const ThemeChanger = styled.div``

const Input = styled.input.attrs( () => ( {type: 'checkbox'} ))`
  visibility: hidden;
`

export{ HeaderStyle, Toggler, ThemeChanger, Input }
