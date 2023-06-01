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
  display: inline-block;
  padding: 5px;
  font-weight: 600;
  text-decoration: none;
  color: #e0f9ff;
  background-color: #bf4352;
  border: 1px solid #bf4352;
  border-radius: 5px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;

  &:hover {
    color: #fff8dc;
  }
`;
