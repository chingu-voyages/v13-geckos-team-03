import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import SearchView from "./SearchView";
import MyFilmsView from "./MyFilmsView";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    position: relative;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={SearchView} />
        <Route path="/myfilms" component={MyFilmsView} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
