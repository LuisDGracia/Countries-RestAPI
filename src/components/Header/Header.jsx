import React from 'react'
import { HeaderStyle, ThemeChanger, Input, Toggler } from './HeaderStyled'

function Header() {

  return (
    <HeaderStyle>
      <h1>Where in the world is Carmen?</h1>

      <ThemeChanger>
        <Input id="Theme" />
        <Toggler htmlFor="Theme" >Dark Mode</Toggler>
      </ThemeChanger> 
    </HeaderStyle>
  )
}

export default Header
