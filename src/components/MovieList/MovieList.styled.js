import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  padding: 0;
  justify-items: center;

  img {
    width: 200px;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
  }

  li {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid red;
    border-radius: 5px;
    width: 200px;

    :hover {
      transform: scale(1.03);
      box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
    }
  }

  a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
  }

  .movie-name {
    padding: 5px;
  }

  ul {
  }
`;
