import styled from 'styled-components'

const HeaderStyle = styled.header`
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Toggler = styled.label``

const ThemeChanger = styled.div``

const Input = styled.input.attrs( () => ({
  type: 'checkbox'
}))``

export{ HeaderStyle, Toggler, ThemeChanger, Input }
