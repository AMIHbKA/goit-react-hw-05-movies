import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 90px;
  left: 2vw;
  display: inline-block;
  padding: 5px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
  background-color: #bf4352;
  border: 1px solid #bf4352;
  border-radius: 5px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: orange;
  }
`;
