import styled from 'styled-components';
import { baseNoInfoStyles } from 'components/UI/GlobalStyles/BaseStyles';

export const CastListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  margin-top: 2vh;
  list-style: none;
  font-size: 0.8em;

  .cast-item {
    display: flex;
    width: 250px;
    align-items: center;
  }

  .avatar {
    margin: 5px;

    width: 66px;
    height: 66px;
    object-fit: cover;
    border-radius: 5px;
    flex-shrink: 0;
  }

  .actor-name,
  .character-name {
    font-weight: 700;
    display: block;
  }

  .character-name {
    color: ${props => props.theme.colors.mainColor};
  }

  .no-cast {
    ${baseNoInfoStyles}
  }
`;
