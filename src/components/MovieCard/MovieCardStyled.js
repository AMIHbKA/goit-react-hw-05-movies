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
    color: #bf4352;
  }

  .scores {
    margin-top: 10px;
    font-weight: 500;
    color: #fff;
    vertical-align: middle;

    span {
      font-weight: 700;
      font-size: 1.2em;
      color: #bf4352;
    }
  }

  .overview-title {
    margin-top: 10%;
    font-size: 1.2em;
    font-weight: 700;
    color: #bf4352;
    border-bottom: 2px solid #bf4352;
  }

  .overview-text {
    margin-top: 1%;
    color: #fff;
  }

  .title-genres {
    grid-area: title-genres;
    color: #fff;
  }

  .genres {
    margin-top: 1%;
    color: #fff;

    span {
      font-weight: 700;
      color: #bf4352;
    }
  }
`;

export const MovieWrapper = styled.div`
  background: linear-gradient(
      to right,
      rgb(31.5 10.5 10.5 / 1),
      rgb(31.5 10.5 10.5 / 0.84) 50%,
      rgb(31.5 10.5 10.5 / 0.84) 100%
    ),
    no-repeat url(${props => props.$backdrop ? '' : props.$backdrop});
  background-size: cover;
  background-position: center;
`;
