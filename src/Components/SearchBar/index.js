import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { searchFilmTitle } from "../Network";

const Container = styled.section`
  padding: 15px 0;
  background-color: #eeeeee;
`;

const Form = styled.form`
  max-width: 940px;
  margin: auto;
  padding: 0 10px;
  }
`;

const FormGroup = styled.div`
  display: inline-block;
  width: 100%;
  padding: 12px 0px;
  border-radius: 40px;
  background-color: #fff;
  input {
    width: calc(100% - 200px);
    margin-left:40px;
    padding: 5px 10px;
    border: none;
    border-bottom: 2px solid lightgrey;
  }
  button {
    margin-left: 20px;
    padding: 7px 20px;
    border: none;
    border-radius: 3px;
    background-color: #3b3272;
    color: #eeeeee;
    &:hover {
      cursor: pointer;
    }
`;

const SearchBar = ({ updateResults }) => {
  const [searchText, setSearchText] = useState(""); // what the user is searching
  const [totalPages, setTotalPages] = useState(1); // the total number of pages (20 results per page) for the search
  const [currentPage, setCurrentPage] = useState(1); // how many pages of the total amount have been rendered on screen

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (searchText.length < 1) return; // input is empty
    const { total_pages, results } = await searchFilmTitle(searchText, 1);
    updateResults([...results]);
    setTotalPages(total_pages);
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

  // when currentPage is changed fetchMoreFilms. But not when the currentPage is at 1 (this is to stop calling API twice from this useEffect and handleSubmit function)
  useEffect(() => {
    if (currentPage === 1) return;
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
