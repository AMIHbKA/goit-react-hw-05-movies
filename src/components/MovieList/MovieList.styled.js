import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  padding: 0;

  img {
    width: 200px;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
  }

  li {
    width: 100%;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      transform: scale(1.03);
    }
  }

  a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
  }

  ul {
  }
`;
