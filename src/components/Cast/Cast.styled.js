import styled from 'styled-components';

export const CastListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;

  list-style: none;
  font-size: 0.8em;

  li {
    display: flex;
    width: 250px;
    align-items: center;
  }

  img {
    margin-right: 5px;
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
`;
