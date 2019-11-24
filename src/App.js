import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import SearchView from "./SearchView";
import MyFilmsView from "./MyFilmsView";
import HomePageView from "./HomePageView";
import SignupView from "./SignupView";
import LoginView from "./LoginView";

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
      <BrowserRouter basename="/v13-geckos-team-03">
        <Header />
        <Route exact path="/" component={HomePageView} />
        <Route exact path="/search" component={SearchView} />
        <Route path="/myfilms" component={MyFilmsView} />
        <Route path="/signup" component={SignupView} />
        <Route path="/login" component={LoginView} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
