import { FormStyled, ButtonSearch, Input } from './SearchForm.styled';
import { SearchButtonIcon } from '../UI/icons';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    onSubmit(formJson);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <ButtonSearch type="submit" name="search">
        <SearchButtonIcon />
      </ButtonSearch>
      <Input type="search" name="searchMovie" required />
    </FormStyled>
  );
};
