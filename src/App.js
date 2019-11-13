import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header/header";
import MyFilms from "./Components/Header/myfilms-test";
import Footer from "./Components/Footer/footer";

const GlobalStyle = createGlobalStyle `
  body {
    font-family: "Roboto", sans-serif;
    position: relative;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Header />
    <Route path="/myfilms" component={MyFilms}/>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
