import styled from 'styled-components';

export const Header = styled.header`
  background: ${props => props.theme.colors.mainColor};
  font-size: 1.4em;
  font-weight: 600;
  border-bottom: 1px solid;

  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
`;
