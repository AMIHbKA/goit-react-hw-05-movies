import styled from 'styled-components';

export const Header = styled.header`
  background: ${props => props.theme.colors.mainColor};
  background-size: 100vw;
  font-size: 1.4em;
  font-weight: 600;

  box-shadow: 2px 4px 8px rgb(0, 0, 0, 0.5);
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
`;
