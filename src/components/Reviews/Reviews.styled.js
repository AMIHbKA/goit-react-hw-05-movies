import styled from 'styled-components';

export const ReviewsStyled = styled.div`
  .no-reviews {
    font-size: 16px;
    font-weight: 500;
    color: #bf4352;
    text-align: center;
    margin-top: 1vh;
  }

  ul {
    margin-top: 2vh;
  }

  li {
    margin-top: 1vh;
    padding: 1vh;
    border: 2px solid #bf4352;
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
  }

  .author {
    color: #bf4352;
    font-weight: 700;
    padding: 5px;
  }

  .text {
    margin-top: 1vh;
    padding-left: 6vw;
    text-align: justify;
  }

  .reviewer {
    display: flex;

    .created {
      color: grey;
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
      background-color: #bf4352;
    }

    .rating-wrapper {
      display: flex;

      justify-content: space-between;
      flex-grow: 2;
    }
  }
`;
