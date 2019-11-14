import React, { useState } from 'react';
import styled from 'styled-components'

import { searchFilmTitle } from '../Network';

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
    background-color: #3B3272;
    color: #eeeeee;
    &:hover {
      cursor: pointer;
    }
  }
`;

const FormGroup = styled.div`
  display: inline-block;
  padding: 25px 60px;
  border-radius: 30px;
  background-color: #fff;
`;

const SearchBar = ({ updateResults }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = event => {
    setSearchText(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const results = await searchFilmTitle(searchText);
    updateResults([...results]);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <input type="text" value={searchText} onChange={handleSearchTextChange}/>
          <button type="submit" value="search">Search</button>
        </FormGroup>
      </Form>
    </Container>
  )
};

export default SearchBar;