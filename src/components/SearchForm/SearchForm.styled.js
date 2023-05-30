import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  margin-inline: auto;
  margin-bottom: 25px;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 32px;
  font: inherit;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid #bf4352;
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const ButtonSearch = styled.button`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 1px solid #bf4352;
  border-right: none;
  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &:hover {
    opacity: 1;

    svg {
      stroke: #3f51b5;
    }
  }
`;
