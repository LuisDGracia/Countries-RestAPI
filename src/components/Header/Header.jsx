import { useContext, memo } from 'react'
import { HeaderStyle, ThemeChanger, Input, Toggler } from './HeaderStyled'
import theme from '../../styles/theme'

//FONT AWERSOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//CONTEXT
import { AppContext } from '../../AppProvider';

export default memo(function Header() {

  const { toggleTheme, themeMode } = useContext(AppContext);

  return (
    <HeaderStyle>
      <h1>Where in the world?</h1>

      <ThemeChanger>
        <Input id="Theme" onChange={ toggleTheme } />
        <Toggler htmlFor="Theme" >
          <FontAwesomeIcon icon={ theme[themeMode].icon } />
          { theme[themeMode].mode }
        </Toggler>
      </ThemeChanger> 
    </HeaderStyle>
  )
})
