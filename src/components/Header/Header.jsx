import React, { useContext } from 'react'
import { HeaderStyle, ThemeChanger, Input, Toggler } from './HeaderStyled'
import { AppContext } from '../../AppProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../../styles/theme'

function Header() {

  const { toggleTheme, themeMode } = useContext(AppContext);

  return (
    <HeaderStyle>
      <h1>Where in the world is Carmen?</h1>

      <ThemeChanger>
        <Input id="Theme" onChange={ toggleTheme } />
        <Toggler htmlFor="Theme" >
          <FontAwesomeIcon icon={ theme[themeMode].icon } />
          { theme[themeMode].mode }
        </Toggler>
      </ThemeChanger> 
    </HeaderStyle>
  )
}

export default Header
