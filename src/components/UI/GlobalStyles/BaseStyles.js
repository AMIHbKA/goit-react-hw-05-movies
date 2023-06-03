import { css } from 'styled-components';

export const baseLinkStyles = css`
  color: #e0f9ff;

  &.active,
  &:hover {
    color: #ccffcc;
    border-bottom: 2px #ccffcc solid;
  }
`;

export const baseNoInfoStyles = css`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.mainColor};
  text-align: center;
  margin-top: 1vh;
`;
