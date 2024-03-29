import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { getMeta, pingUser } from "./Components/Network";
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
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin: 0;
  }
`;

function App() {
  const [user, updateUser] = useState({ user: false });

  const logUserIn = newUser => {
    updateUser(state => {
      return {
        ...state,
        user: true,
        email: newUser.email,
        _id: newUser._id,
        films: {}
      };
    });
    handleGetMeta();
  };

  const logUserOut = () => {
    updateUser(() => {
      return {
        user: false
      };
    });
  };

  const handleGetMeta = async () => {
    const res = await getMeta();
    if (res.errors) {
      console.log(res.errors);
    }
    if (res.docs.length) {
      const films = res.docs.reduce((acc, film) => {
        acc[film.filmId] = film;
        return acc;
      }, {});
      updateUser(user => {
        return {
          ...user,
          films
        };
      });
    }
  };

  useEffect(() => {
    (async () => {
      const res = await pingUser();
      if (res.errors) {
        console.log(res.errors);
      }
      if (res.user) {
        logUserIn({
          user: true,
          email: res.user.email,
          _id: res.user._id
        });
      }
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="/v13-geckos-team-03">
        <Header user={user} logUserOut={logUserOut} />
        <Route exact path="/">
          <HomePageView user={user} updateUser={updateUser} />
        </Route>
        <Route exact path="/search">
          <SearchView user={user} updateUser={updateUser} />
        </Route>
        <Route path="/myfilms">
          <MyFilmsView user={user} updateUser={updateUser} />
        </Route>
        <Route
          path="/signup"
          render={() => <SignupView logUserIn={logUserIn} />}
        />
        <Route
          path="/login"
          render={() => <LoginView logUserIn={logUserIn} />}
          logUserIn={logUserIn}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
