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
    margin-top: 2vh;
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

  .watch {
    margin-top: 2vh;
    padding: 5px;
    font-weight: 700;
    color: #bf4352;
    background: none;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;
const color = `242 229 223`;
console.log(color);
export const MovieWrapper = styled.div`
  background: linear-gradient(
      to right,
      rgb(${color} / 1),
      rgb(${color} / 0.84) 50%,
      rgb(${color} / 0.84) 100%
    ),
    no-repeat ${props => (props.$backdrop ? `url(${props.$backdrop})` : 'none')};
  background-size: cover;
`;
