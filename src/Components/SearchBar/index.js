import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { searchFilmTitle } from "../Network";

const Container = styled.section`
  padding: 30px 0;
  background-color: #eeeeee;
`;

const Form = styled.form`
  max-width: 940px;
  margin: auto;
  input {
    width: 300px;
    padding: 5px 10px;
    border: none;
    border-bottom: 2px solid lightgrey;
  }
  button {
    margin-left: 30px;
    padding: 7px 20px;
    border: none;
    border-radius: 3px;
    background-color: #3b3272;
    color: #eeeeee;
    &:hover {
      cursor: pointer;
    }
  }
`;

const FormGroup = styled.div`
  display: inline-block;
  padding: 25px 40px;
  border-radius: 40px;
  background-color: #fff;
`;

const SearchBar = ({ updateResults }) => {
  const [searchText, setSearchText] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (searchText.length < 1) return; // input is empty
    const { total_pages, results } = await searchFilmTitle(searchText, 1);
    updateResults([...results]);
    setTotalPages(total_pages + 1);
    setCurrentPage(1);
  };

  // add event listener to scroll, please see handleScroll function
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // when user scroll to bottom increase the current page count by 1, but only if not on the last page
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (currentPage < totalPages) {
        setCurrentPage(prev => prev + 1);
      }
    }
  };

  // when currentPage is changed fetchMoreFilms
  useEffect(() => {
    if (currentPage >= totalPages || currentPage === 1) return;
    fetchMoreFilms();
  }, [currentPage]);

  // fetch more films and add to the end of the previous results
  async function fetchMoreFilms() {
    const { results } = await searchFilmTitle(searchText, currentPage);
    updateResults(prev => [...prev, ...results]);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <button type="submit" value="search">
            Search
          </button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default SearchBar;
