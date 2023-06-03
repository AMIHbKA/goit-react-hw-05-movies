import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { baseLinkStyles } from './BaseStyles';

export const StyledLink = styled(NavLink)`
  ${baseLinkStyles}
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 90px;
  left: 2vw;
  padding: 5px;
  font-weight: 600;
  text-decoration: none;
  color: rgb(${props => props.$primary});
  background-color: rgb(${props => props.$secondary});
  border: 1px solid rgb(${props => props.$secondary});
  border-radius: 5px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;

  &:hover {
    color: rgb(${props => props.$secondary});
    background-color: rgb(${props => props.$primary});
  }
`;
