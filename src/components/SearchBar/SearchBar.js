const SearchBar = ({onSubmit}) => {
    return (
        <div>
        <form
          onSubmit={evt => {
            evt.preventDefault();
  
            onSubmit(evt.target.elements.searchQuery.value);
            evt.target.reset();
          }}
        >
          <button type="submit">
            Search
          </button>
  
          <input
            name="searchQuery"
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </div>
    )
}

export default SearchBar;