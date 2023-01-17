export const SearchForm = ({ brand, model, handleOnChange, handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <label>Brand</label>
      <input type="text" value={brand} name="brand" onChange={handleOnChange} />
      <label>Model:</label>
      <input type="text" value={model} name="model" onChange={handleOnChange} />
      <button type="submit">Search</button>
    </form>
  );
};
