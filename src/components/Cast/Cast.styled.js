import styled from 'styled-components';

export const CastListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  margin-top: 2vh;
  list-style: none;
  font-size: 0.8em;

  li {
    display: flex;
    width: 250px;
    align-items: center;
  }

  img {
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
    color: #bf4352;
  }

  .no-cast {
    font-size: 16px;
    font-weight: 500;
    color: #bf4352;
    text-align: center;
    margin-top: 1vh;
  }
`;
