import styled from 'styled-components';
import { baseNoInfoStyles } from 'components/UI/GlobalStyles/BaseStyles';

export const ReviewsStyled = styled.div`
  .no-reviews {
    ${baseNoInfoStyles}
  }

  .list {
    margin-top: 2vh;
  }

  .item {
    margin-top: 1vh;
    padding: 1vh;
    border: 2px solid ${props => props.theme.colors.mainColor};
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
  }

  .author {
    color: ${props => props.theme.colors.mainColor};
    font-weight: 700;
    padding: 5px;
  }

  .text {
    margin-top: 1vh;
    padding-left: 6vw;
    text-align: justify;

    .read-more {
      padding: 0;
      font-weight: 500;
      color: ${props => props.theme.colors.mainColor};
      background: none;
      border: none;
    }
  }

  .reviewer {
    display: flex;

    .created {
      color: ${props => props.theme.colors.mainColor};
      font-size: 0.7em;
    }

    .avatar {
      margin-right: 1vw;
      width: 64px;
      height: 64px;
      border-radius: 5px;
    }

    .rating {
      text-align: center;
      margin-left: auto;
      padding: 1px 8px;
      color: #fff;
      font-weight: 500;
      border-radius: 5px;
      background-color: ${props => props.theme.colors.mainColor};
    }

    .rating-wrapper {
      display: flex;

      justify-content: space-between;
      flex-grow: 2;
    }
  }
  .skeleton-item {
    width: 100%;
  }

  .skeleton-info {
    width: 100%;
    .skeleton-text {
      margin-top: 1vh;
    }
  }
`;
