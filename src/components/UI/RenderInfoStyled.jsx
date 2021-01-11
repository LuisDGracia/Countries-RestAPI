import styled from 'styled-components'


const Info = styled.p`
  margin: 0;
  color: ${ ({ theme }) => theme.colors.Text };
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
`;

const Data = styled.span`
  font-weight: 400;
`;

const Borders = styled.span`
  width: 80px;
  margin-top: 10px;
  margin-left: 5px;
  padding: 5px;
  background-color: ${ ({theme}) => theme.colors.Elements };
  text-align: center;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);
  display: inline-block;

  grid-colum: 1 / -1;
  grid-row: 5 / 6

  ${Data}{
    font-size: 14px;
  }
`

export{Info, Data, Borders}
