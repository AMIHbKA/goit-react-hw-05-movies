import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  height: 5vh;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: 500;
  color: ${props => props.theme.colors.mainColor};
  border-bottom: 2px solid ${props => props.theme.colors.mainColor};
  box-shadow: 0px 2px 4px rgb(0, 0, 0, 0.5);
`;
