import React, { useState } from 'react';

const SearchBar = props => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = event => {
    console.log(event);
  }

  return (
    <section>
      <div>
        <input type="text" onChange={handleSearchTextChange}/>
      </div>
    </section>
  )
};

export default SearchBar;