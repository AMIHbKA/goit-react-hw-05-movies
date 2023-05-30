export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log('FormData', FormData);
    const formJson = Object.fromEntries(formData.entries());
    console.log('formJson', formJson);
    onSubmit(formJson);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" name="searchMovie" required />
      <button type="submit">Search</button>
    </form>
  );
};
