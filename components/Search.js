import React from 'react';
import Axios from 'axios';

const Search = () => {
  const searchFunction = () => {
    const data = Axios.get(
      'https://www.wordreference.com/es/translation.asp?tranword=hi'
    );
    data.then((value) => {
      console.log(value);
    });
  };

  return (
    <div className="search-button">
      <button onClick={searchFunction()}>hit</button>
    </div>
  );
};
export default Search;
