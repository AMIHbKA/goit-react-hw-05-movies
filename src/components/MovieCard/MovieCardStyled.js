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
    color: rgb(${props => props.theme.mainContrastColor});
  }

  .scores {
    margin-top: 10px;
    font-weight: 500;
    color: rgb(${props => props.theme.mainContrastColor});
    vertical-align: middle;

    span {
      font-weight: 700;
      font-size: 1.2em;
      color: rgb(${props => props.theme.mainContrastColor});
    }
  }

  .overview-title {
    margin-top: 2vh;
    font-size: 1.2em;
    font-weight: 700;
    color: rgb(${props => props.theme.mainContrastColor});
    border-bottom: 2px solid rgb(${props => props.theme.mainContrastColor});
  }

  .overview-text {
    margin-top: 1%;
    color: rgb(${props => props.theme.mainContrastColor});
  }

  .title-genres {
    color: rgb(${props => props.theme.mainContrastColor});
  }

  .genres {
    margin-top: 1%;
    color: rgb(${props => props.theme.mainContrastColor});

    span {
      font-weight: 700;
      color: rgb(${props => props.theme.mainContrastColor});
    }
  }

  .watch {
    margin-top: 2vh;
    padding: 5px;
    font-weight: 700;
    color: rgb(${props => props.theme.mainContrastColor});
    background: none;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: rgb(${props => props.theme.mainDynamicColor});
      background-color: rgb(${props => props.theme.mainContrastColor});
    }
  }
`;

export const MovieWrapper = styled.div`
  background: linear-gradient(
      to right,
      rgb(${props => props.theme.mainDynamicColor} / 1),
      rgb(${props => props.theme.mainDynamicColor} / 0.84) 50%,
      rgb(${props => props.theme.mainDynamicColor} / 0.84) 100%
    ),
    no-repeat ${props => (props.$backdrop ? `url(${props.$backdrop})` : 'none')};
  background-size: cover;
`;
