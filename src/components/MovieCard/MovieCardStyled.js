import { Container } from 'components/UI/GlobalStyles/Container.styled';
import styled from 'styled-components';

export const MovieDetailsContainer = styled(Container)`
  display: flex;

  @media screen and (max-width: 480px) {
    display: block;
  }

  .poster {
    margin-right: 15px;
    object-fit: cover;
    border-radius: 10px;
    width: 300px;
    height: 450px;
  }

  .title {
    font-weight: 900;
    font-size: 2em;
    color: rgb(${props => props.$secondary});
  }

  .scores {
    margin-top: 10px;
    font-weight: 500;
    color: rgb(${props => props.$secondary});
    vertical-align: middle;

    span {
      font-weight: 700;
      font-size: 1.2em;
      color: rgb(${props => props.$secondary});
    }
  }

  .overview-title {
    margin-top: 2vh;
    font-size: 1.2em;
    font-weight: 700;
    color: rgb(${props => props.$secondary});
    border-bottom: 2px solid rgb(${props => props.$secondary});
  }

  .overview-text {
    margin-top: 1%;
    color: rgb(${props => props.$secondary});
  }

  .title-genres {
    color: rgb(${props => props.$secondary});
  }

  .genres {
    margin-top: 1%;
    color: rgb(${props => props.$secondary});

    span {
      font-weight: 700;
      color: rgb(${props => props.$secondary});
    }
  }

  .watch {
    margin-top: 2vh;
    padding: 5px;
    font-weight: 700;
    color: rgb(${props => props.$secondary});
    background: none;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: rgb(${props => props.$primary});
      background-color: rgb(${props => props.$secondary});
    }
  }
`;

export const MovieWrapper = styled.div`
  background: linear-gradient(
      to right,
      rgb(${props => props.$primary} / 1) 25%,
      rgb(${props => props.$primary} / 0.65) 50%,
      rgb(${props => props.$primary} / 1) 75%,
      rgb(${props => props.$primary} / 1) 100%
    ),
    no-repeat ${props => (props.$backdrop ? `url(${props.$backdrop})` : 'none')};
  background-size: cover;
  background-position: center top;
`;
