import styled from 'styled-components';
// import { Layout } from './Layout';
import { NavLink } from 'react-router-dom';

// export const StyledLayout = styled(Layout)``;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
