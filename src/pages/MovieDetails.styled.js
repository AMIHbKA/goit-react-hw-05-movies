import { baseNoInfoStyles } from 'components/UI/GlobalStyles/BaseStyles';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  padding: 0;
  border-bottom: 2px solid #bf4352;

  li {
    width: 70px;
    text-align: center;
    padding: 5px;
    background-color: #bf4352;
    border-right: #fff 1px solid;
    border-left: #fff 1px solid;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const Title = styled.h2`
  color: #bf4352;
  font-size: 1.5em;
  margin-block: 1vh;
`;

export const NoSearchResults = styled.div`
  ${baseNoInfoStyles}
`;
