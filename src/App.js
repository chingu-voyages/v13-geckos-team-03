import React from "react";
<<<<<<< HEAD
import "./App.css";
import SearchBar from "./SearchBar";
=======
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
>>>>>>> development

function App() {
  useEffect(() => {    
    // get config on mount
    (async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${APIKEY}`);
        const data = await res.json();
        console.log(data)
        const { secure_base_url, poster_sizes, backdrop_sizes } = data.images;
        updateConfig({
          secure_base_url,
          backdrop_sizes,
          poster_sizes
        })
      } catch (err) {
        console.error(err);
      }
    })();
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
