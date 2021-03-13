import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc( 100vh - 220px );
  padding: 0 40px;
  background-color: ${ ({ theme }) => theme.colors.Background };
`