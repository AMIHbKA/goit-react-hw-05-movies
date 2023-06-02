import { FormStyled, ButtonSearch, Input } from './SearchForm.styled';
import { SearchButtonIcon } from '../UI/icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const SearchForm = ({ query, setSearchParams }) => {
  const [search, setSearch] = useState(query);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const query = form.searchMovie.value;


    if (query === '') {
      return setSearchParams({});
    };

    setSearchParams({ query: query });
  };

  return (
    <FormStyled autoComplete="off" onSubmit={handleSubmit}>
      <ButtonSearch type="submit" name="search">
        <SearchButtonIcon />
      </ButtonSearch>
      <Input type="search" name="searchMovie" value={search} onChange={e => setSearch(e.target.value)} />
    </FormStyled>
  );
};

SearchForm.propTypes = {
  query: PropTypes.string.isRequired, setSearchParams: PropTypes.func.isRequired,
};
